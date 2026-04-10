const curseur = document.getElementById('cursor');

window.addEventListener('mousemove', (e) => {
  if (curseur) {
    curseur.style.top = e.clientY + 'px';
    curseur.style.left = e.clientX + 'px';
  }
});

const boutonDefilementBas = document.getElementById('scrollDownBtn');
const boutonVersProjets = document.getElementById('scrollToWorkBtn');

const defilerVersBas = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

const defilerVersProjets = () => {
  window.scrollTo({
    top: window.innerHeight * 2,
    behavior: 'smooth',
  });
};

if (boutonDefilementBas) {
  boutonDefilementBas.addEventListener('click', defilerVersBas);
}

if (boutonVersProjets) {
  boutonVersProjets.addEventListener('click', defilerVersProjets);
}

const indicateurDefilement = document.getElementById('scroll-indicator');
window.addEventListener('scroll', () => {
  if (!indicateurDefilement) return;

  indicateurDefilement.style.opacity = window.scrollY > 50 ? '0' : '1';
});
