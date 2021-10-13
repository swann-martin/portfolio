import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>
          Directeur d'agence séjours linguistiques&nbsp;-&nbsp;
          <span title="Oxford Intensive School of English">OISE</span>
        </h4>
        <h5>2014-2020</h5>
        <ul>
          <li>Gestion d'une antenne régionnale à Bordeaux & Lille</li>
          <li>Chiffre d'affaire annuel moyen 250 000€</li>
          <li>Forte organisation, travail bilingue, négociation</li>
        </ul>
      </div>
      <div className="exp-2">
        <h4>
          Enseignant Français / Espagnol&nbsp;-&nbsp;
          <span title="Ciy of Portsmouth Girl School">CPGS</span>
        </h4>
        <h5>2012-2014</h5>
        <ul>
          <li>
            Enseignement du français et de l'espagnol dans un collège anglais.
          </li>
          <li>Management de groupe et gestion des conflits</li>
          <li>Travail en milieu entièrement bilingue</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
