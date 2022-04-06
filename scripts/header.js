const header = document.querySelector('#header');

window.addEventListener('scroll', (e) => {
  let scroll = document.documentElement.scrollTop;
  header.style.opacity = Math.max(0, Math.min(1, scroll / 400 - 1.5));
});
