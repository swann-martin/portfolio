const mainContainer = document.querySelector(".main-container");
const btnBurger = document.querySelector(".nav__burger");
const menu = document.querySelector(".menu");
const btnSkills = document.querySelector(".btn-skills");

let savoirs = document.querySelector(".savoirs__liste__right");
let counter = -1;
let myProjects = document.querySelector("#projets");

// display menu burger
btnBurger.addEventListener("click", () => {
  menu.classList.toggle("--invisible");
});

mainContainer.addEventListener("click", (e) => {
  if (e.target !== btnBurger) {
    console.log(e.target);
    menu.classList.add("--invisible");
  }
});

// display list of skills
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

const selectSkill = (arrlist) => {
  counter++;
  if (counter < arrlist.length) {
    let showDiv = document.createElement("div");
    showDiv.innerHTML = `<p class=" badge ${
      counter % 2 ? "--fav" : "--cool"
    }">${skills[counter]}</p>`;

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
};

btnSkills.addEventListener("click", () => {
  selectSkill(skills);
});

let projects = [
  {
    id: 1,
    title: "Portfolio",
    date: "Janvier 2021",
    languages: ["HTML", "JavaScript", "Sass"],
    infos:
      "Un simple portfolio pour me présenter en HTML pur , Sass et JavaScript. J'ai ajouté quelques projets et je le modifie régulièrement pour",
    img: "images/athena.png",
    link: "https://swannwho.com",
  },
  {
    id: 2,
    title: "Jummmp",
    date: "Avril 2021",
    languages: ["Symfony", "mySQL", "Twig2", "CSS"],
    infos:
      "Web application delivered during the evaluation for the CNCP certification Web Integration Techniques & Web Development Techniques. Directed by Swann Martin, Michael Krysztofiak & Thomas Barnabé.",
    img: "images/jummmp.png",
    link: "https://dry-lowlands-89814.herokuapp.com/",
  },
  {
    id: 3,
    title: "Burgers de Maman",
    date: "Mars 2021",
    languages: ["Angular", "TypeScript", "Sass"],
    infos:
      " Objectif du TP, créer en 3h un site avec le framework Angular après 2 jours de formation. Inclure des data binding interpolation event binding et routing. ",
    img: "images/burgerDeMaman.png ",
    link: "https://github.com/swann-martin/burgersDeMaman",
  },
  {
    id: 4,
    title: "Durand Ebéniste",
    date: "Mars 2020",
    languages: ["Wordpress", "Elementor", "Php"],
    infos:
      "Projet réalisé pendant la formation Webforce3 en 4 jours , en groupe de 4. L'objectif était d'utiliser Wordpress et de créer un projet de A à Z en incluant un mini cahier des charges( whireframe, personaes)",
    img:
      "images/Wordpress Durand Ébénistes de père en fils - Durand ébénistes.png",
    link: "swann-martin.rf.gd/wordpress/",
  },
];

const displayProjects = () => {
  projects.forEach(function (project) {
    let card = document.createElement("div");
    let titre = document.createElement("p");
    titre.textContent = `${project.title}`;

    card.classList.add("card");
    let img = document.createElement("img");
    img.setAttribute("src", `${project.img}`);
    card.style.width = "40rem";
    card.style.borderRadius = "20px";
    card.style.overflow = "hidden";
    titre.style.paddingLeft = "2rem";
    card.classList.add("card");
    card.appendChild(img);
    card.appendChild(titre);
    myProjects.appendChild(card);
  });
};

// displayProjects();
