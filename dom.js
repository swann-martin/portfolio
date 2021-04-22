const mainContainer = document.querySelector(".main-container");

const btnBurger = document.querySelector(".nav__burger");
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

const btnSkills = document.querySelector(".btn-skills");
btnSkills.classList.add("--d-none");

let counter = 0;
let skills = [
  "Adaptabilité",
  "Communication",
  "Anglais bilingue",
  "Analyse",
  "Résolution de problèmes",
  "Négociation",
  "Gestion de projet",
  "Formation",
];
btnSkills.addEventListener("click", () => {
  let counter = 0;
  let skills = [
    "Adaptabilité",
    "Communication",
    "Anglais bilingue",
    "Analyse",
    "Résolution de problèmes",
    "Négociation",
    "Gestion de projet",
    "Formation",
  ];
  counter < skills.length ? counter++ : (counter = 0);
  console.log(skills[counter]);
  btnSkills.classList.toggle("--fav");
});
