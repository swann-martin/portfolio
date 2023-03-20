import React from "react";
import Navigation from "../../components/Nav/Navigation";
import ProjectList from "../../components/portfolio/projectsList/ProjectList";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Portfolio;
