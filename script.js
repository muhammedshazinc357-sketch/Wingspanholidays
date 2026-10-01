const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 900) nav.style.display = 'none';
}));
document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
