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

let savoirs = document.querySelector(".savoirs__liste__right");

let counter = -1;

function selectSkill(arrlist) {
  counter++;
  if (counter < arrlist.length) {
    let showDiv = document.createElement("div");
    showDiv.innerHTML = `<div class="savoirs__liste btn ${
      counter % 2 ? "--fav" : ""
    }">${skills[counter]}</div>`;
    savoirs.appendChild(showDiv);
    if (counter === 4) {
      btnSkills.innerHTML = "Encore ?";
    }
    if (counter === 7) {
      btnSkills.innerHTML = "La liste est finie mais j'en ai encore plein !";
    }
  } else {
    btnSkills.classList.add("--d-none");
  }
}

btnSkills.addEventListener("click", () => {
  selectSkill(skills);

  btnSkills.classList.toggle("--fav");
});
