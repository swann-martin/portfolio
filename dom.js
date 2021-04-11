const mainContainer = document.querySelector(".main-container");

const btnBurger = document.querySelector(".nav button");
console.log(btnBurger);
const menu = document.querySelector(".menu");

btnBurger.addEventListener("click", () => {
  menu.classList.toggle("--invisible");
});

mainContainer.addEventListener("click", (e) => {
  if (e.target !== btnBurger) {
    console.log(e.target);
    menu.classList.add("--invisible");
  }
});
