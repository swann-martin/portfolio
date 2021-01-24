const nav__burger = document.querySelector(".nav__burger");
const nav__burger__bar__top = document.querySelector(".nav__burger__bar__top");
const nav__burger__bar__middle = document.querySelector(
  ".nav__burger__bar__middle"
);

const h1 = document.querySelector("h1");
const nav__burger__bar__bottom = document.querySelector(
  ".nav__burger__bar__bottom"
);

nav__burger.addEventListener("click", () => {
  h1.classList.toggle("red");
  nav__burger.classList.toggle("nav__burger--open");
});
