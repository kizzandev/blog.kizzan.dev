/*const menuPush = () => {
  const menu = document.querySelector(".menu");
  menu.style.transform = "scale(0.8)";
  setTimeout(() => {
    menu.style.transform = "scale(1)";
  }, 750);
};*/

let run = false;
let timer;
const placeholder = () => {
  const content = document.querySelector("#main");
  const menu = document.querySelector(".menu");

  menu.style.transform = "scale(0.8)";
  setTimeout(() => {
    menu.style.transform = "scale(1)";
  }, 750);

  if (run == true) {
    clearInterval(timer);
    content.style.transform = "scale(1)";
    content.style.opacity = "1";
    run = false;
  } else {
    run = true;
    timer = setInterval(() => {
      if (content.style.transform == "scale(1)") {
        content.style.transform = "scale(0.995)";
        content.style.opacity = "0.75";
      } else {
        content.style.transform = "scale(1)";
        content.style.opacity = "1";
      }
    }, 1200);
  }
};
