import React from "react";
import Navigation from "../../components/Nav/Navigation";
import cv from "../../media/CVSwannMartin.pdf";

const Home = () => {
  const title = "Développeur";
  const subtitle = "TypeScript | Reactjs | React Native | Flutter";
  const linkText = " Voir mon CV";

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1 className="content-title">{title}</h1>
          <h2 className="content-subtitle">{subtitle}</h2>
          <div className="content-pdf">
            <a
              className="content-pdf-link"
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span>{linkText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
