import { defineConfig } from 'vite';

/**
 * Écrit le contenu du portfolio directement dans index.html au build (et en dev) :
 * la page reste lisible et navigable sans JavaScript, et les moteurs de recherche voient le texte.
 * Le même code (src/render.js) sert ensuite à main.js dans le navigateur.
 */
function prerender() {
  return {
    name: 'prerender-portfolio',
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        const mod = ctx.server ? await ctx.server.ssrLoadModule('/src/render.js') : await import('./src/render.js');
        let out = html;
        for (const [id, content] of Object.entries(mod.fill(true))) {
          const re = new RegExp(`(<(\\w+)[^>]*\\sid="${id}"[^>]*>)(</\\2>)`);
          if (!re.test(out)) throw new Error(`prerender : zone #${id} introuvable dans index.html`);
          out = out.replace(re, (_, open, _tag, close) => open + content + close);
        }
        return out.replace('<!--NOJS-->', mod.noScriptDetails());
      },
    },
  };
}

export default defineConfig({ base: './', plugins: [prerender()] });
