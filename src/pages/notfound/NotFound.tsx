import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="noutFoundContent">
        <h3>Désolé cette page n'existe pas ! </h3>
        <NavLink to="/">
          <i className="fas fa-home"></i>
          <span>Acueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
