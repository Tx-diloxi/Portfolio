// Effet curseur
const curseur = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    if (curseur) {
        curseur.style.left = e.clientX + 'px';
        curseur.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mousedown', () => {
    curseur?.classList.add('active');
});

document.addEventListener('mouseup', () => {
    curseur?.classList.remove('active');
});



// Défilement fluide vers le haut
const retourEnHaut = document.querySelector('.back-to-top');
if (retourEnHaut) {
    retourEnHaut.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Ajout d'animation au scroll
const optionsObservateur = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observateur = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, optionsObservateur);

// Observer toutes les cartes de projet
document.querySelectorAll('.project-card, .competence-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observateur.observe(card);
});

// Gestion de l'en-tête fixe
let dernierScrollY = window.scrollY;
const enteteFixe = document.getElementById('stickyHeader');

window.addEventListener('scroll', () => {
    const scrollActuel = window.scrollY;
    
    if (enteteFixe) {
        if (scrollActuel > dernierScrollY && scrollActuel > 100) {
            // Défilement vers le bas - cacher l'en-tête
            enteteFixe.classList.add('hidden');
        } else if (scrollActuel < dernierScrollY) {
            // Défilement vers le haut - montrer l'en-tête
            enteteFixe.classList.remove('hidden');
        }
    }
    
    dernierScrollY = scrollActuel;
});

window.addEventListener('scroll', () => {
    if (!retourEnHaut) return;

    retourEnHaut.style.opacity = window.scrollY > 300 ? '0.8' : '0';
});
