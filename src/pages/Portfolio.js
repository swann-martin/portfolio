import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = (data) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Portfolio;
