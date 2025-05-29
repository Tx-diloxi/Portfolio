// Cursor effect
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Add active class to clickable elements
const clickableElements = document.querySelectorAll('a, button, .contact-btn, .project-card');
clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

// Smooth scroll for back to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card, .competence-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Gestion du header sticky
let lastScrollY = window.scrollY;
const stickyHeader = document.getElementById('stickyHeader');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Défilement vers le bas - cacher le header
        stickyHeader.classList.add('hidden');
    } else if (currentScrollY < lastScrollY) {
        // Défilement vers le haut - montrer le header
        stickyHeader.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
});

// Gestion du bouton retour en haut
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '0.8';
    } else {
        backToTop.style.opacity = '0';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
