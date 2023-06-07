import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../media/swann.webp';
import logo from '../../media/logoSwann.svg';
import {
  BrainIcon,
  Cart,
  Enveloppe,
  GitHub,
  HomeIcon,
  ImageIcon,
  Linkedin,
  Malt,
  Mastodon
} from '../../components/Icons';

const Navigation = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navLinks = [
    {
      label: 'Home',
      icon: <HomeIcon class="icon" />,
      path: '/'
    },
    {
      label: 'Projects',
      // icon: 'fas fa-images',
      icon: <ImageIcon class="icon" />,
      path: '/portfolio'
    },
    {
      label: 'Skills',
      // icon: 'fas fa-brain',
      icon: <BrainIcon class="icon" />,
      path: '/knowledges'
    },

    {
      label: 'Contact',
      // icon: 'fa-solid fa-envelope',
      icon: <Enveloppe class="icon" />,
      path: '/contact'
    }
  ];

  const socialNetworkLinks = [
    {
      label: 'Linkedin',
      icon: 'fab fa-linkedin',
      iconComponent: <Linkedin />,
      path: 'https://www.linkedin.com/in/swann-martin'
    },
    {
      label: 'Github',
      icon: 'fab fa-github',
      iconComponent: <GitHub />,
      path: 'https://github.com/swann-martin/'
    },
    {
      label: 'Mastodon',
      icon: 'fa-brands fa-mastodon',
      iconComponent: <Mastodon />,
      path: 'https://fosstodon.org/@swann'
    },
    {
      label: 'Malt.be',
      icon: 'fa-sharp fa-solid fa-id-badge',
      iconComponent: <Malt />,
      path: 'https://fr.malt.be/profile/swannmartin'
    }
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
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'navActive' : undefined
                }
                to={link.path}
              >
                {/* <i className={link.icon}></i> */}
                {link.icon}
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
                {social.iconComponent}
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
