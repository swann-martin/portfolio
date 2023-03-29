import React, { Component, useState } from 'react';
import { PortfolioData, portfolioData } from '../../../data/portfolioData';
import Modal from '../modal/Modal';
import Project from '../project/Project';
import './project-list.scss';

const ProjectList = () => {
  const [projects, setProjects] = useState<PortfolioData[]>(portfolioData);
  const radios = [
    { id: 1, value: 'react' },
    { id: 2, value: 'typescript' },
    { id: 3, value: 'javascript' },
    { id: 4, value: 'mobile' },
    { id: 5, value: 'php' },
    { id: 6, value: 'all' }
  ];
  const [selectedRadio, setSelectedRadio] = useState<string>('all');

  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState<PortfolioData>(portfolioData[0]);

  const handleInfo = () => {
    setShowModal(!showModal);
  };

  const handleRadio = (event: any) => {
    if (event.target?.value) {
      let radio = event.target.value;
      setSelectedRadio(radio);
    } else {
      let radio = event?.target.textContent
        .trim()
        .toLowerCase()
        .split('#')
        .join('');

      radio = radio === selectedRadio ? 'all' : radio;
      setSelectedRadio(radio);
    }
  };

  return (
    <div className="portfolioContent">
      <ul className="radioDisplay">
        {radios.map((radio) => {
          return (
            <li key={radio.id}>
              <input
                type="radio"
                name="radio"
                checked={radio.value === selectedRadio}
                value={radio.value}
                id={radio.value}
                onChange={handleRadio}
              />
              <label htmlFor={radio.value}>{radio.value}</label>
            </li>
          );
        })}
      </ul>

      <div className="projects">
        {projects
          .filter((item: PortfolioData) =>
            item.languages.includes(selectedRadio)
          )
          .map((item: PortfolioData) => {
            return (
              <Project
                key={item?.id}
                item={item}
                handleRadio={handleRadio}
                selectedLanguage={selectedRadio}
                showModal={showModal}
                showInfo={showInfo}
                setShowInfo={setShowInfo}
                handleInfo={handleInfo}
              />
            );
          })}
        {showModal && !!showInfo && (
          <Modal item={showInfo} handleInfo={handleInfo} />
        )}
      </div>
    </div>
  );
};

export default ProjectList;
