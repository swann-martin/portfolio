import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../media/swann.jpg';
import cv from '../media/CVSwannMartin.pdf';
import logo from '../media/swannlogo.png';
const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img className="idContent-avatar" src={avatar} alt="profile-pic" />
          <h3 className="idContent-title">
            <img className="idContent-title-pic" src={logo} alt="swann-logo" />
            wann Martin
          </h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-brain"></i> <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i> <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/swann-martin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/swann-martin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/martiswann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <a
            href="http://swannwho.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            swann martin - 2021
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
