import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bruxelles</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0667025467">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert('Numéro de téléphone copié');
                  }}
                >
                  0032 4 56 59 60 82
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="swannmartin1988@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert('email copié');
                  }}
                >
                  swannmartin1988@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/swann-martin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/swann-martin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=33667025467"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Whatsapp</h4>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
