const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".menu__line");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav_show");
  lines.forEach((line) => {
    line.classList.toggle("position-center");
  });
  lines[1].classList.toggle("hide");
  lines[0].classList.toggle("rotate-plus");
  lines[2].classList.toggle("rotate-minus");
});
