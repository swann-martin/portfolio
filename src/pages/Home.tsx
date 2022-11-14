import React from 'react';
import Navigation from '../components/Navigation';
import cv from '../media/CVSwannMartin.pdf';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1 className="content-title">Swann Martin</h1>
          <h2 className="content-subtitle">Développeur</h2>
          <div className="content-pdf">
            <a
              className="content-pdf-link"
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span> Voir mon</span>
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
