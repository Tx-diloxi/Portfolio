import * as THREE from 'three';

/**
 * Un arbre seul sur une colline, gravé à l'encre verte.
 * Le scroll fait voyager la caméra : vue d'ensemble → racines → tronc →
 * branches → feuillage → cime → vue du ciel. Une étape par section.
 */
export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let seed = 21;
const rng = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
const rand = (a, b) => a + (b - a) * rng();
const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);
const UP = V(0, 1, 0);

/* relief de la colline : un dôme doux, l'arbre au sommet */
const HILL = 3.2;
const hillY = (x, z) => {
  const r = Math.hypot(x, z);
  return HILL * Math.exp(-((r / 15) ** 2)) + 0.35 * Math.sin(x * 0.21) * Math.cos(z * 0.17) * Math.min(1, r / 12);
};

const NOISE = `
float h3(vec3 p){ p = fract(p*0.3183099+0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float n3(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.0-2.0*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x), mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x), mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm(vec3 p){ float s=0.0,a=0.5; for(int i=0;i<4;i++){ s+=a*n3(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return s; }
float iso(float v, float w){ float d = abs(fract(v)-0.5); return smoothstep(0.5-w*0.9, 0.5-w*0.1, d); }
`;

/** Tube effilé ; rFn(t) donne le rayon le long de la courbe. */
function addTube(bag, curve, rFn, segs, radial) {
  const fr = curve.computeFrenetFrames(segs, false);
  const L = curve.getLength(), base = bag.pos.length / 3;
  const P = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    curve.getPointAt(t, P);
    const r = rFn(t);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      n.copy(fr.normals[i]).multiplyScalar(-Math.cos(a)).addScaledVector(fr.binormals[i], Math.sin(a)).normalize();
      bag.pos.push(P.x + n.x * r, P.y + n.y * r, P.z + n.z * r);
      bag.nor.push(n.x, n.y, n.z);
      bag.len.push(t * L);
      bag.ang.push(j / radial);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = base + i * (radial + 1) + j, b = a + radial + 1;
    bag.idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
}
const taper = (r0, r1, tipClose = true) => (t) =>
  (r1 + (r0 - r1) * Math.pow(1 - t, 1.2)) * (1 + 0.05 * Math.sin(t * 19 + r0 * 7)) * (tipClose ? 1 - 0.9 * THREE.MathUtils.smoothstep(t, 0.92, 1) : 1);

export function initScene(canvas) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }); }
  catch { return { setStation() {}, setPaused() {}, setFrozen() {}, project: () => null, heroAnchors: [], limbAnchors: [] }; }
  const small = innerWidth < 800;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 400);

  const uni = {
    uTime: { value: 0 }, uGrow: { value: reduce ? 99 : -1 }, uFade: { value: 1 },
    uGreen: { value: new THREE.Color(0x6fcf97) }, uDeep: { value: new THREE.Color(0x3f9e68) },
    uPaper: { value: new THREE.Color(0xefeeec) },
  };

  /* ================= l'arbre ================= */
  const bag = { pos: [], nor: [], len: [], ang: [], idx: [] };
  const Q = small ? 0.6 : 1;
  const SEG = [Math.round(220 * Q), Math.round(90 * Q), 40, 22, 12];
  const RAD = [40, 22, 12, 8, 6];
  const terminals = [];      // bouts de rameaux → feuillage
  const limbs1 = [];         // grosses branches (étape « branches »)

  // tronc : un peu en S, évasé au pied
  const base = V(0, HILL - 0.8, 0);
  const trunk = new THREE.CatmullRomCurve3([base, V(0.3, 6, 0.2), V(-0.4, 11, -0.2), V(0.2, 15.5, 0.1), V(0.1, 18.5, 0)], false, 'centripetal');
  const trunkR = (t) => 0.72 + 0.8 * Math.pow(1 - t, 1.6);
  addTube(bag, trunk, (t) => trunkR(t) * (1 + 1.1 * Math.exp(-t * 16)) * (1 + 0.04 * Math.sin(t * 31)), SEG[0], RAD[0]);

  function grow(start, dir, len, r, depth, maxDepth) {
    const side = new THREE.Vector3().crossVectors(dir, UP);
    if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
    side.normalize();
    const up = new THREE.Vector3().crossVectors(side, dir).normalize();
    const bow = rand(-0.12, 0.22), sway = rand(-0.25, 0.25);
    const node = (f, u, k) => start.clone().addScaledVector(dir, len * f).addScaledVector(up, len * u).addScaledVector(side, len * k)
      .addScaledVector(UP, len * 0.18 * f * f);               // les rameaux se relèvent vers la lumière
    const curve = new THREE.CatmullRomCurve3([start.clone(), node(0.33, bow * 0.5, sway * 0.4), node(0.66, bow, sway * 0.8), node(1, bow * 0.8, sway)], false, 'centripetal');
    addTube(bag, curve, taper(r, r * 0.55, depth === maxDepth), SEG[Math.min(depth, 4)], RAD[Math.min(depth, 4)]);
    if (depth === 1) limbs1.push(curve);
    if (depth === maxDepth) { terminals.push(curve); return; }
    const kids = depth <= 1 ? 3 : 2 + (rng() < 0.45 ? 1 : 0);
    for (let i = 0; i < kids; i++) {
      const t = i === kids - 1 ? 0.97 : rand(0.4, 0.85);
      const p = curve.getPointAt(t), tan = curve.getTangentAt(t);
      const ax = new THREE.Vector3().crossVectors(tan, UP);
      if (ax.lengthSq() < 1e-6) ax.set(1, 0, 0);
      ax.normalize().applyAxisAngle(tan, rng() * Math.PI * 2);
      const d = tan.clone().applyAxisAngle(ax, i === kids - 1 ? rand(0.15, 0.4) : rand(0.5, 0.95)).addScaledVector(UP, 0.2).normalize();
      const rHere = r + (r * 0.55 - r) * t;
      grow(p, d, len * rand(0.62, 0.78), rHere * rand(0.62, 0.78), depth + 1, maxDepth);
    }
  }
  const maxD = small ? 3 : 4;
  // charpentières : départs étagés sur le haut du tronc, puis la fourche sommitale
  [[0.56, 5.3], [0.62, 0.3], [0.68, 3.1], [0.72, 2.4], [0.78, 5.9], [0.8, 4.4], [0.86, 0.9], [0.88, 1.3], [0.93, 3.9], [0.95, 3.5]].forEach(([t, a]) => {
    const p = trunk.getPointAt(t);
    const d = V(Math.cos(a), rand(0.7, 1.1), Math.sin(a)).normalize();
    grow(p, d, rand(7, 9), trunkR(t) * 0.62, 1, maxD);
  });
  grow(trunk.getPointAt(0.99), V(0.1, 1, 0.05).normalize(), 7.5, 0.5, 1, maxD);

  // racines : contreforts qui épousent la colline puis plongent dans la terre
  const roots = [];
  for (let k = 0; k < 7; k++) {
    const a = (k / 7) * Math.PI * 2 + rand(-0.25, 0.25);
    const L = rand(6, 9);
    const at = (f, lift) => {
      const r = 0.5 + f * L, b = a + Math.sin(f * 3 + k) * 0.18;
      const x = Math.cos(b) * r, z = Math.sin(b) * r;
      return V(x, hillY(x, z) + lift, z);
    };
    const pts = [V(Math.cos(a) * 0.3, HILL + 1.6, Math.sin(a) * 0.3), at(0.22, 0.45), at(0.5, 0.3), at(0.78, 0.05), at(1, -0.9)];
    const c = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    addTube(bag, c, (t) => (0.75 * Math.pow(1 - t, 1.4) + 0.08), Math.round(70 * Q), 18);
    roots.push(c);
    // radicelles
    for (let j = 0; j < 2; j++) {
      const t = rand(0.35, 0.7), p = c.getPointAt(t);
      const b = a + (j ? 0.7 : -0.7);
      const e = V(p.x + Math.cos(b) * 2.6, 0, p.z + Math.sin(b) * 2.6);
      e.y = hillY(e.x, e.z) - 0.4;
      const m = p.clone().lerp(e, 0.5); m.y = hillY(m.x, m.z) + 0.15;
      addTube(bag, new THREE.CatmullRomCurve3([p, m, e], false, 'centripetal'), (u) => 0.22 * (1 - u) + 0.04, 30, 10);
    }
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(bag.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(bag.nor, 3));
  g.setAttribute('aLen', new THREE.Float32BufferAttribute(bag.len, 1));
  g.setAttribute('aAng', new THREE.Float32BufferAttribute(bag.ang, 1));
  g.setIndex(bag.idx);

  const wood = new THREE.ShaderMaterial({
    uniforms: uni,
    vertexShader: `
      attribute float aLen, aAng; varying float vLen, vAng; varying vec3 vW, vN;
      void main(){ vLen = aLen; vAng = aAng; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz;
        vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: NOISE + `
      uniform vec3 uGreen, uDeep, uPaper; uniform float uGrow, uFade;
      varying float vLen, vAng; varying vec3 vW, vN;
      void main(){
        if (vW.y > uGrow) discard;
        // fil du bois : lignes le long du membre, ondulées
        float warp = fbm(vW*0.45 + vec3(vLen*0.08))*9.0 + fbm(vW*1.4)*2.2;
        float grain = vAng*40.0 + warp + sin(vLen*0.9 + vAng*6.2832)*0.6;
        float gw = fwidth(grain);
        float lines = iso(grain, gw) * smoothstep(1.0, 0.3, gw);
        float ring = fbm(vW*0.7 + 7.0)*14.0; float rw = fwidth(ring);
        lines = max(lines, iso(ring, rw)*0.75*smoothstep(0.9, 0.25, rw)*smoothstep(0.45, 0.62, fbm(vW*0.3)));
        vec3 V = normalize(cameraPosition - vW);
        float rim = abs(dot(normalize(vN), V));
        float outline = 1.0 - smoothstep(0.14, 0.3, rim);
        float ink = clamp(max(lines, outline), 0.0, 1.0) * uFade;
        vec3 col = mix(uGreen, uDeep, outline*0.15);   // contour assez clair pour qu'un texte lisible passe dessus (>= 4,5:1)
        gl_FragColor = vec4(mix(uPaper, col, ink), 1.0);
      }`,
  });
  const tree = new THREE.Mesh(g, wood);
  tree.frustumCulled = false;
  scene.add(tree);

  /* ================= le feuillage : feuilles gravées instanciées ================= */
  const lp = [], ln = [], lr = [];
  const per = small ? 22 : 40;
  for (let i = 0; i < per; i++) {
    terminals.forEach((c) => {
      const tip = i % 3 === 0;                       // un tiers des feuilles garnit le bout du rameau
      const p = c.getPointAt(tip ? rand(0.85, 1) : rand(0.3, 1)).add(V(rand(-1, 1), rand(-0.6, 1), rand(-1, 1)).multiplyScalar(tip ? 0.6 : 1.1));
      const n = V(rand(-1, 1), rand(0.2, 1.2), rand(-1, 1)).normalize();
      lp.push(p.x, p.y, p.z); ln.push(n.x, n.y, n.z); lr.push(rand(0, 6.28), rand(0.4, 0.95), rng());
    });
  }
  const leafGeo = new THREE.InstancedBufferGeometry();
  leafGeo.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0.5, 1, 0, -0.5, 1, 0], 3));
  leafGeo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
  leafGeo.setIndex([0, 1, 2, 0, 2, 3]);
  leafGeo.setAttribute('iPos', new THREE.InstancedBufferAttribute(new Float32Array(lp), 3));
  leafGeo.setAttribute('iNrm', new THREE.InstancedBufferAttribute(new Float32Array(ln), 3));
  leafGeo.setAttribute('iRnd', new THREE.InstancedBufferAttribute(new Float32Array(lr), 3));
  leafGeo.instanceCount = lp.length / 3;
  for (const a of [bag.pos, bag.nor, bag.len, bag.ang, bag.idx, lp, ln, lr]) a.length = 0;   // copiés dans les buffers : on rend la mémoire
  const leaves = new THREE.Mesh(leafGeo, new THREE.ShaderMaterial({
    uniforms: uni, side: THREE.DoubleSide,
    vertexShader: `
      attribute vec3 iPos, iNrm, iRnd; uniform float uTime; varying vec2 vUv; varying vec3 vW; varying float vR;
      void main(){
        vec3 n = normalize(iNrm);
        vec3 t = normalize(cross(n, abs(n.y) < 0.95 ? vec3(0,1,0) : vec3(1,0,0)));
        vec3 b = cross(n, t);
        float c = cos(iRnd.x), s = sin(iRnd.x);
        vec3 tx = t*c + b*s, ty = -t*s + b*c;
        float sway = sin(uTime*1.3 + iPos.x*0.7 + iPos.z*0.5) * 0.08;
        vec3 p = iPos + (tx*position.x + ty*(position.y) + n*position.y*sway) * iRnd.y;
        vUv = uv; vR = iRnd.z; vW = p;
        gl_Position = projectionMatrix*viewMatrix*vec4(p,1.0);
      }`,
    fragmentShader: `
      uniform vec3 uGreen, uDeep, uPaper; uniform float uGrow, uFade;
      varying vec2 vUv; varying vec3 vW; varying float vR;
      void main(){
        if (vW.y > uGrow) discard;
        float x = vUv.x - 0.5, y = vUv.y;
        float w = 0.44 * pow(sin(3.14159*y), 0.85);          // silhouette de la feuille
        float ax = abs(x);
        if (ax > w) discard;
        float px = fwidth(x)*1.2;
        float edge = 1.0 - smoothstep(px, px*2.2, w - ax);
        float rib = (1.0 - smoothstep(px*0.6, px*1.6, ax)) * step(0.04, y);
        float vein = (1.0 - smoothstep(0.0, 0.07, abs(fract((y - ax*1.3)*5.0) - 0.5) - 0.43)) * step(0.06, ax) * 0.6;
        float ink = clamp(max(max(edge, rib), vein), 0.0, 1.0) * uFade;
        vec3 fill = mix(uPaper, uGreen, (0.03 + 0.06*vR) * uFade);       // un voile vert, chaque feuille un peu différente
        gl_FragColor = vec4(mix(fill, mix(uGreen, uDeep, 0.2), ink*0.85), 1.0);
      }`,
  }));
  leaves.frustumCulled = false;
  scene.add(leaves);

  /* ================= la colline : courbes de niveau ================= */
  const hg = new THREE.PlaneGeometry(240, 240, small ? 90 : 150, small ? 90 : 150);
  hg.rotateX(-Math.PI / 2);
  const hp = hg.attributes.position;
  for (let i = 0; i < hp.count; i++) hp.setY(i, hillY(hp.getX(i), hp.getZ(i)));
  hg.computeVertexNormals();
  const hill = new THREE.Mesh(hg, new THREE.ShaderMaterial({
    uniforms: uni,
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: NOISE + `
      uniform vec3 uGreen, uPaper; uniform float uFade; varying vec3 vW;
      void main(){
        float r = length(vW.xz);
        float f = vW.y*5.0 + fbm(vW*0.35)*0.8;
        float w = fwidth(f);
        float lines = iso(f, w) * smoothstep(1.2, 0.3, w);
        // herbe : petites hachures près de l'arbre
        float grass = 0.0;
        if (r < 9.0) grass = iso(vW.x*3.0 + fbm(vW*2.0)*2.0, fwidth(vW.x*3.0)) * smoothstep(9.0, 2.0, r) * step(0.6, fbm(vW*1.7)) * 0.6;
        float ink = max(lines, grass) * smoothstep(110.0, 40.0, r) * 0.8 * uFade;
        gl_FragColor = vec4(mix(uPaper, uGreen, ink), 1.0);
      }`,
  }));
  hill.frustumCulled = false;
  scene.add(hill);

  /* ================= étapes de caméra ================= */
  const fork = trunk.getPointAt(0.8);
  let crown = V(0, 0, 0);
  terminals.forEach((c) => { const p = c.getPointAt(1); if (p.y > crown.y) crown = p; });
  const midLeaf = terminals.map((c) => c.getPointAt(0.8)).sort((a, b) => Math.abs(a.y - 24) - Math.abs(b.y - 24))[0];
  const out = V(midLeaf.x, 0, midLeaf.z).normalize();
  const stations = [
    { pos: V(0, 22, 100), look: V(0, 29, 0), off: 0 },                                         // la colline, de loin
    { pos: V(5.5, 5.2, 10), look: V(0, 3.4, 0), off: 1 },                                     // racines
    { pos: V(-5.5, 9.5, 8), look: V(0, 10, 0), off: 1 },                                      // tronc
    { pos: fork.clone().add(V(6, 0.5, 11)), look: fork.clone().add(V(0, 3, 0)), off: 1 },     // branches
    { pos: midLeaf.clone().add(out.clone().multiplyScalar(6.5)).add(V(0, 0.6, 0)), look: midLeaf.clone(), off: 1 }, // feuilles
    { pos: crown.clone().add(V(3, 6, 10)), look: crown.clone().add(V(0, -2, 0)), off: 1 },    // cime
    { pos: V(0, 62, 52), look: V(0, 8, 0), off: 2.1 },                                       // vue du ciel
  ];
  const posCurve = new THREE.CatmullRomCurve3(stations.map((s) => s.pos), false, 'catmullrom', 0.4);
  const lookCurve = new THREE.CatmullRomCurve3(stations.map((s) => s.look), false, 'catmullrom', 0.4);

  /* ================= points d'ancrage des "+" ================= */
  const anchors = [];
  const add = (v) => anchors.push(v) - 1;
  const stationAnchors = [
    [add(roots[1].getPointAt(0.45)), add(limbs1[1].getPointAt(0.5)), add(limbs1[0].getPointAt(0.9))],
    [0, 2, 4].map((k) => add(roots[k].getPointAt(0.42))),
    [0.25, 0.45, 0.65].map((t) => add(trunk.getPointAt(t))),
    [0, 1, 2].map((k) => add(limbs1[k].getPointAt(0.45))),
    [0.5, 0.8, 0.95].map((t) => add(terminals[Math.floor(terminals.length / 2)].getPointAt(t))),
    [add(crown.clone().add(V(-1.5, -1, 0))), add(crown.clone()), add(crown.clone().add(V(1.5, -1.5, 0)))],
    [add(crown.clone().add(V(-4, 0, 0))), add(crown.clone()), add(crown.clone().add(V(4, 0, 0)))],
  ];

  let target = 0, cur = 0, mx = 0, my = 0, W = 1, H = 1;
  const resize = () => {
    W = innerWidth; H = innerHeight;
    renderer.setSize(W, H, false);
    cam.aspect = W / H;
    cam.updateProjectionMatrix();
  };
  addEventListener('resize', resize); resize();
  addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });

  const clock = new THREE.Clock(), tmp = new THREE.Vector3(), camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  let intro = reduce ? 1 : 0, vel = 0, dip = 0, frames = 0, acc = 0, cuts = 0, paused = false, frozen = reduce, lastOff = NaN;
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (paused || document.hidden) return;                     // rien à voir : on ne rend pas
    // garde-fou : après l'intro, si la moyenne dépasse ~28 ms, on retire 30 % du feuillage (2 paliers max)
    if (intro >= 1 && cuts < 2 && !document.hidden) {
      acc += dt; frames++;
      if (frames === 90) {
        if (acc / frames > 0.028) { leafGeo.instanceCount = Math.floor(leafGeo.instanceCount * 0.7); cuts++; }
        else cuts = 2;
        frames = 0; acc = 0;
      }
    }
    if (!frozen) uni.uTime.value += dt;
    if (intro < 1) { intro = Math.min(1, intro + dt / 3); uni.uGrow.value = intro >= 1 ? 99 : HILL - 1 + (1 - Math.pow(1 - intro, 2.2)) * 36; }
    if (reduce) {
      // mouvement réduit : pas de vol, on passe d'une étape à l'autre avec un fondu
      const st = Math.round(target);
      if (st !== cur) { cur = st; dip = 1; }
      dip = Math.max(0, dip - dt / 0.35);
    } else {
      // ressort critique (amortissement 1, réponse 0,45 s) : garde la vitesse quand on inverse le scroll
      const w = (Math.PI * 2) / 0.45;
      for (let n = 0, h = dt / 3; n < 3; n++) { vel += (w * w * (target - cur) - 2 * w * vel) * h; cur += vel * h; }
    }
    const u = THREE.MathUtils.clamp(cur / (stations.length - 1), 0, 1);
    posCurve.getPoint(u, camPos); lookCurve.getPoint(u, camLook);
    const narrow = cam.aspect < 1;
    if (narrow) camPos.sub(camLook).multiplyScalar(1.6).add(camLook);
    cam.position.set(camPos.x + mx * 0.6, camPos.y - my * 0.4, camPos.z);
    cam.lookAt(camLook);
    // hors du héros, le sujet glisse en haut à droite, là où le texte laisse de la place
    const i = Math.min(stations.length - 2, Math.floor(cur)), f = THREE.MathUtils.clamp(cur - i, 0, 1);
    const off = THREE.MathUtils.lerp(stations[i].off, stations[i + 1].off, f) * (narrow ? 0 : 1);
    if (off !== lastOff) { lastOff = off; cam.setViewOffset(W, H, -W * 0.2 * off, H * 0.06 * off, W, H); }
    // derrière le texte des sections, le dessin recule ; il revient pour la vue du ciel
    uni.uFade.value = 1 - 0.62 * THREE.MathUtils.smoothstep(cur, 0.2, 0.8) + 0.3 * THREE.MathUtils.smoothstep(cur, 5.3, 6);
    uni.uFade.value *= 1 - 0.75 * dip;
    renderer.render(scene, cam);
  });

  return {
    setStation: (v) => { target = v; },
    setPaused: (v) => { paused = v; },
    setFrozen: (v) => { frozen = v; },
    isFrozen: () => frozen,
    heroAnchors: stationAnchors[0],
    limbAnchors: stationAnchors.slice(1),
    project(k) {
      tmp.copy(anchors[k]);
      if (tmp.y > uni.uGrow.value) return null;
      tmp.project(cam);
      if (tmp.z > 1) return null;
      return { x: (tmp.x + 1) / 2 * W, y: (1 - tmp.y) / 2 * H };
    },
  };
}
