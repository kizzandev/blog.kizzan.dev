const items = document.querySelectorAll('.portfolio-card');
let itemCurrent = 0;
let itemL = items.length - 1;
let itemR = 1;
let portfolioItemL = itemL;
let portfolioItemR = itemR;
let portfolioItemC = itemCurrent;
const urls = [
  'https://github.com/kevinzanzi/CodingWithKevin/tree/main/Python/OrganizeDirectory',
  'https://github.com/kevinzanzi/CodingWithKevin/tree/main/Python/QuizGame',
  'https://github.com/kevinzanzi/CodingWithKevin/tree/main/CPP/HuffmanCD',
];
const portfolioLink = document.querySelectorAll('.portolio-link');
const linkToProject = document.createElement('div');
linkToProject.classList.add('portfolio-link');
linkToProject.setAttribute('onclick', '');
linkToProject.innerHTML = `
<a href="#" target="_blank" rel="noopener noreferrer">
  <img src="./images/github.svg" alt="Github"
/></a>`;
const portfolioDots = document.querySelectorAll('.cursor-pointer');

const nextL = () => {
  if (itemCurrent === 0) {
    itemCurrent = items.length - 1;
  } else {
    itemCurrent--;
  }
  action();
};
const nextR = () => {
  if (itemCurrent === items.length - 1) {
    itemCurrent = 0;
  } else {
    itemCurrent++;
  }
  action();
};

window.onload = () => {
  action();
};
window.onresize = () => {
  action();
};

window.addEventListener('load', () => {
  let dist = null;
  let touch = items[0].parentElement;
  let startX = null;
  let threshold = 100;
  touch.addEventListener('touchstart', (e) => {
    dist = 0;
    startX = e.changedTouches[0].pageX;
    e.preventDefault();
  });
  touch.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });
  touch.addEventListener('touchend', (e) => {
    dist = e.changedTouches[0].pageX - startX;
    if (dist < -threshold) {
      nextR();
    } else if (dist > threshold) {
      nextL();
    }
    e.preventDefault();
  });
});

const action = (current = itemCurrent) => {
  items.forEach((e) => {
    e.style.display = `none`;
    if (items[0].children[0].classList.contains('portfolio-link')) {
      items[0].children[0].remove();
    }
  });

  if (current === 0) {
    itemL = items.length - 1;
    itemR = 1;
  } else if (current === items.length - 1) {
    itemL = items.length - 2;
    itemR = 0;
  } else {
    itemL = current - 1;
    itemR = current + 1;
  }

  portfolioItemL = document.querySelector(`[data-value='${itemL}']`);
  portfolioItemC = document.querySelector(`[data-value='${current}']`);
  portfolioItemR = document.querySelector(`[data-value='${itemR}']`);

  portfolioItemL.style.display = 'flex';
  portfolioItemC.style.display = 'flex';
  portfolioItemR.style.display = 'flex';

  portfolioItemL.style.order = '1';
  portfolioItemC.style.order = '2';
  portfolioItemR.style.order = '3';

  if (window.innerWidth < 420) {
    portfolioItemL.style.transform = `translateX(-30%) scale(.5)`;
    portfolioItemC.style.transform = `translateX(0) scale(.8)`;
    portfolioItemR.style.transform = `translateX(30%) scale(.5)`;
    document.querySelectorAll('.carousel-arrow').forEach((e) => {
      e.style.display = 'none';
    });
    document.querySelector(
      '#portfolio-card-list'
    ).parentElement.style.justifyContent = 'center';
  } else if (window.innerWidth < 700) {
    portfolioItemL.style.transform = `translateX(-30%) scale(.5)`;
    portfolioItemC.style.transform = `translateX(0) scale(.8)`;
    portfolioItemR.style.transform = `translateX(30%) scale(.5)`;
    document.querySelectorAll('.carousel-arrow').forEach((e) => {
      e.style.display = 'initial';
    });
    document.querySelector(
      '#portfolio-card-list'
    ).parentElement.style.justifyContent = 'space-between';
  } else {
    portfolioItemL.style.transform = `translateX(-75%) scale(.8)`;
    portfolioItemC.style.transform = `translateX(0)`;
    portfolioItemR.style.transform = `translateX(75%) scale(.8)`;
  }

  portfolioItemL.style.backgroundColor = `var(--color-t1-a-third)`;
  portfolioItemC.style.backgroundColor = `var(--color-t1-b)`;
  portfolioItemR.style.backgroundColor = `var(--color-t1-a-third)`;

  portfolioItemL.style.zIndex = '500';
  portfolioItemC.style.zIndex = '1000';
  portfolioItemR.style.zIndex = '500';

  portfolioItemL.style.position = 'absolute';
  portfolioItemC.style.position = 'relative';
  portfolioItemR.style.position = 'absolute';

  portfolioItemC.prepend(linkToProject);

  portfolioItemC.children[0].children[0].href = urls[current];
  portfolioItemC.children[0].children[0].target = '_blank';
  portfolioItemC.children[0].children[0].rel = 'noopener noreferrer';

  portfolioItemL.setAttribute('onclick', 'nextL()');
  portfolioItemC.setAttribute('onclick', '');
  portfolioItemR.setAttribute('onclick', 'nextR()');

  portfolioItemL.style.cursor = 'pointer';
  portfolioItemC.style.cursor = 'initial';
  portfolioItemR.style.cursor = 'pointer';

  portfolioDots.forEach((e) => {
    e.style.color = 'white';
  });

  document.querySelector(`[data-dot-value='${current}']`).style.color =
    'var(--color-t1-c)';
};
