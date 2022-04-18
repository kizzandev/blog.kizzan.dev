const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
  let scroll = document.documentElement.scrollTop;
  let wh = window.innerHeight;
  // Math did not work out perfectly, so i overengineered itgi
  if (scroll < wh / 2) {
    header.style.opacity = 0;
  } else if (scroll < wh * (21 / 40)) {
    header.style.opacity = 0.05;
  } else if (scroll < wh * (22 / 40)) {
    header.style.opacity = 0.1;
  } else if (scroll < wh * (23 / 40)) {
    header.style.opacity = 0.15;
  } else if (scroll < wh * (24 / 40)) {
    header.style.opacity = 0.2;
  } else if (scroll < wh * (25 / 40)) {
    header.style.opacity = 0.25;
  } else if (scroll < wh * (26 / 40)) {
    header.style.opacity = 0.3;
  } else if (scroll < wh * (27 / 40)) {
    header.style.opacity = 0.35;
  } else if (scroll < wh * (28 / 40)) {
    header.style.opacity = 0.4;
  } else if (scroll < wh * (29 / 40)) {
    header.style.opacity = 0.45;
  } else if (scroll < wh * (30 / 40)) {
    header.style.opacity = 0.5;
  } else if (scroll < wh * (31 / 40)) {
    header.style.opacity = 0.55;
  } else if (scroll < wh * (32 / 40)) {
    header.style.opacity = 0.6;
  } else if (scroll < wh * (33 / 40)) {
    header.style.opacity = 0.65;
  } else if (scroll < wh * (34 / 40)) {
    header.style.opacity = 0.7;
  } else if (scroll < wh * (35 / 40)) {
    header.style.opacity = 0.75;
  } else if (scroll < wh * (36 / 40)) {
    header.style.opacity = 0.8;
  } else if (scroll < wh * (37 / 40)) {
    header.style.opacity = 0.85;
  } else if (scroll < wh * (38 / 40)) {
    header.style.opacity = 0.9;
  } else if (scroll < wh * (39 / 40)) {
    header.style.opacity = 0.95;
  } else if (scroll > wh) {
    header.style.opacity = 1;
  }
});
