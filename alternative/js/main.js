function info() {
  var hero = document.getElementById("hero");
  var about = document.getElementById("about");

  if (hero.style.display === "none") {
    about.style.opacity = "0";
    about.style.display = "none";
    hero.style.display = "unset";
    setTimeout(() => {
      hero.style.opacity = "1";
    }, 10);
  } else {
    hero.style.opacity = "0";
    hero.style.display = "none";
    about.style.display = "unset";
    setTimeout(() => {
      about.style.opacity = "1";
    }, 10);
  }
}
