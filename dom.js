const mainContainer = document.querySelector(".main-container");
const nav__burger = document.querySelector(".nav__burger");
const nav__burger__bar = document.querySelector(".nav__burger__bar");
const nav__burger__bar__top = document.querySelector(".nav__burger__bar__top");
const nav__burger__bar__middle = document.querySelector(
  ".nav__burger__bar__middle"
);

const h1 = document.querySelector("h1");
const nav__burger__bar__bottom = document.querySelector(
  ".nav__burger__bar__bottom"
);

const menu = document.querySelector(".menu");

mainContainer.addEventListener("click", (evt) => {
  if (
    evt.target === nav__burger ||
    evt.target === nav__burger__bar__top ||
    evt === nav__burger__bar__middle ||
    evt === nav__burger__bar__bottom ||
    evt === nav__burger__bar
  ) {
    nav__burger.classList.toggle("nav__burger--open");
    menu.classList.toggle("--invisible");
  } else {
    menu.classList.add("--invisible");
    nav__burger.classList.remove("nav__burger--open");
  }
});
