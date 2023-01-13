import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../media/swann.jpeg';

import logo from '../media/swannlogo.png';
const Navigation = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navLinks = [
    {
      label: 'Accueil',
      icon: 'fas fa-home',
      path: '/',
    },
    {
      label: 'Portfolio',
      icon: 'fas fa-images',
      path: '/portfolio',
    },
    {
      label: 'Compétences',
      icon: 'fas fa-brain',
      path: '/knowledges',
    },

    {
      label: 'Contact',
      icon: 'fas fa-address-book',
      path: '/contact',
    },
  ];

  const socialNetworkLinks = [
    {
      label: 'Linkedin',
      icon: 'fab fa-linkedin',
      path: 'https://www.linkedin.com/in/swann-martin',
    },
    {
      label: 'Mastodon',
      icon: 'fa-brands fa-mastodon',
      path: 'https://fosstodon.org/@swann',
    },
    {
      label: 'Github',
      icon: 'fab fa-github',
      path: 'https://github.com/swann-martin/',
    },
    {
      label: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      path: 'https://api.whatsapp.com/send?phone=33667025467',
    },
  ];

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
          {navLinks.map((link, index) => (
            <li key={`${link.label}${index}`}>
              <NavLink to={link.path}>
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          {socialNetworkLinks.map((social) => (
            <li key={social.label}>
              <a href={social.path} target="_blank" rel="noopener noreferrer">
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <div className="signature">
          <a
            href="http://swannmartin.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy;swann martin - {year}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;