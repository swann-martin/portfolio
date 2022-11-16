import React from "react";

const Experience = () => {
  const title = "Expérience";

  const experienceInfo = [
    {
      jobTitle: "Développeur",
      company: "Beecoming",
      date: "Décembre 2021 - Novembre 2022",
      summary: "Développement d'applications hybrides et web",
      skills:
        "React Native, Flutter, Node, Reactjs, Angular, Ionic, git, Jira, Office 360",
      softSkills:
        "Organisation, Autonomie, recherche de solution, travail en équipe",
    },
    {
      jobTitle: "Formation Développeur",
      company: "Webforce 3 & O'clock",
      date: "Décembre 2020  - Septembre 2021",
      summary: "Développement d'applications web et mobiles",
      skills: "React.js, Angular, Ionic, Php, Symfony, Mysql, Scss, Wordpress",
      softSkills: "Certification Techniques de développement Web RS1448",
      softSkills2: "Certification Techniques d'intégration RSRS1447",
    },
    {
      jobTitle: "Directeur d'agence séjours linguistiques",
      company: "OISE",
      date: "2014-2020",
      summary: "Gestion d'une antenne régionnale à Bordeaux & Lille",
      skills: "Chiffre d'affaire annuel moyen 250 000€",
      softSkills: "Forte organisation, travail bilingue, négociation",
    },
  ];

  return (
    <div className="experience">
      <h3>{title}</h3>
      {experienceInfo.map((exp, index) => (
        <div className={`exp-${index + 1}`} key={`exp-${index + 1}`}>
          <h4>{exp.jobTitle}&nbsp;</h4>
          <h5>{exp.company}</h5>
          <h6>{exp.date}</h6>
          <ul>
            <li>{exp.summary}</li>
            <li>{exp.skills}</li>
            <li>{exp.softSkills}</li>
            {!!exp?.softSkills2 && <li>{exp?.softSkills2}</li>}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
