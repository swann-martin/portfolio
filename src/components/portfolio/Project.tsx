import React, { useState } from 'react';
import { PortfolioData } from '../../data/portfolioData';

export const Project = ({ item }: { item: PortfolioData }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  let {
    name,
    languagesIcons,
    sourceCode,
    info,
    picture,
    deployedAt,
    languages,
  } = item;

  const Modal = ({ picture }: { picture: string }) => {
    return (
      <div
        className="showInfos"
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        onClick={handleInfo}
      >
        <div className="infosContent" style={{ opacity: 1 }}>
          <div className="head">
            <h2>{name}</h2>
            <div className="button close" onClick={handleInfo}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          {languages.map((language, index) => {
            return (
              <span key={`${language}-modal-${index}`}>
                {language === 'all' ? null : ' #' + language}
              </span>
            );
          })}
          <p className="text">{info}</p>

          <div className="sourceCode">
            <a
              href={sourceCode}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le code sur Github
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project">
      <div className="icons">
        {languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      {picture === '' ? (
        <i className="infos-link fab fa-github" onClick={handleInfo}></i>
      ) : (
        <img src={picture} alt={name} onClick={handleInfo} />
      )}

      <p className="infos">
        {!!deployedAt && deployedAt !== '' && (
          <a
            className="infos-link"
            href={deployedAt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="infos-link fa fa-eye" onClick={handleInfo}></i>
          </a>
        )}
        <div>
          {languages?.map((language, index) => (
            <span key={`${language}-${index}`}>
              {language === 'all' ? null : ' #' + language}
            </span>
          ))}
        </div>
        <span className="infos-link" onClick={handleInfo}>
          Voir infos
          <i className="fa fa-circle-info "></i>
        </span>
      </p>

      {showInfo && <Modal picture={picture} />}
    </div>
  );
};

export default Project;
