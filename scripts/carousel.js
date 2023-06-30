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
  'https://github.com/kevinzanzi/CodingWithKevin/tree/main/Python/PasswordGen',
  'https://github.com/kevinzanzi/CodingWithKevin/tree/main/Python/PasswordCrackerSha1',
]; // links for the portfolio
const portfolioLink = document.querySelectorAll('.portolio-link');
const linkToProject = document.createElement('div');
linkToProject.classList.add('portfolio-link');
linkToProject.setAttribute('onclick', ''); // creating attr to modify later
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
  // this could be added in event listener
  action();
};
window.onresize = () => {
  // styling on viewport width change
  action();
};

window.addEventListener('load', () => {
  // this needs fixing, on mobile prevents sliding up or down
  let dist = null;
  let touch = items[0].parentElement; // maybe current portfolio-card
  let startX = null;
  let threshold = 100; // minimum sliding distance
  touch.addEventListener('touchstart', (e) => {
    dist = 0;
    startX = e.changedTouches[0].pageX; // start pos
    e.preventDefault();
  });
  touch.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });
  touch.addEventListener('touchend', (e) => {
    dist = e.changedTouches[0].pageX - startX; // end pos - start pos
    if (dist < -threshold) {
      // negative dist means finger goes left
      nextR();
    } else if (dist > threshold) {
      // positive dist means finger goes right
      nextL();
    }
    e.preventDefault();
  });
});

const action = (current = itemCurrent) => {
  // this is meant to only display 3 cards at any given time,
  // regardless of how many there are...
  items.forEach((e) => {
    e.style.display = `none`; // hides all cards
    if (items[0].children[0].classList.contains('portfolio-link')) {
      // removes hovered item of all cards
      items[0].children[0].remove();
    }
  });

  // the following sets the left and rights items
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

  // selecting cards with the correct data-values
  portfolioItemL = document.querySelector(`[data-value='${itemL}']`);
  portfolioItemC = document.querySelector(`[data-value='${current}']`);
  portfolioItemR = document.querySelector(`[data-value='${itemR}']`);

  // making them visible with flex
  portfolioItemL.style.display = 'flex';
  portfolioItemC.style.display = 'flex';
  portfolioItemR.style.display = 'flex';

  // the current item goes in the middle
  portfolioItemL.style.order = '1';
  portfolioItemC.style.order = '2';
  portfolioItemR.style.order = '3';

  // pseudo media query, styling for multiple screen widths
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

  /*
   * more styling
   */
  portfolioItemL.style.backgroundColor = `var(--color-t1-a-third)`;
  portfolioItemC.style.backgroundColor = `var(--color-t1-b)`;
  portfolioItemR.style.backgroundColor = `var(--color-t1-a-third)`;

  portfolioItemL.style.zIndex = '500';
  portfolioItemC.style.zIndex = '1000';
  portfolioItemR.style.zIndex = '500';

  portfolioItemL.style.position = 'absolute';
  portfolioItemC.style.position = 'relative';
  portfolioItemR.style.position = 'absolute';

  // adding hovered element
  portfolioItemC.prepend(linkToProject);

  // url to project
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
    // setting all dots to white
    e.style.color = 'white';
  });

  // setting current data-value dot to a different colour
  document.querySelector(`[data-dot-value='${current}']`).style.color =
    'var(--color-t1-c)';
};
