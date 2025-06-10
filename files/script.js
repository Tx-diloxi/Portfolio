const cursor = document.getElementById('cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

const scrollDownBtn = document.getElementById('scrollDownBtn');
const scrollToWorkBtn = document.getElementById('scrollToWorkBtn');

scrollDownBtn.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
});

scrollToWorkBtn.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight * 2,
    behavior: 'smooth',
  });
});

const scrollIndicator = document.getElementById('scroll-indicator');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollIndicator.style.opacity = '0';
  } else {
    scrollIndicator.style.opacity = '1';
  }
});
