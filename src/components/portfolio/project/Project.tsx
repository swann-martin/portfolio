import { useState } from 'react';
import { PortfolioData } from '../../../data/portfolioData';
import Modal from '../modal/Modal';
import './project.scss';

export const Project = ({
  item,
  handleRadio,
  selectedLanguage
}: {
  item: PortfolioData;
  selectedLanguage: string;
  handleRadio: (event: any) => void;
}) => {
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
    languages
  } = item;

  return (
    <div className="project">
      <div className="header">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <div className="tags">
          {languages?.map((language, index) => (
            <p
              onClick={(e) => {
                handleRadio(e);
              }}
              className={
                language === 'all'
                  ? ''
                  : language === selectedLanguage
                  ? 'tag tag--selected'
                  : 'tag'
              }
              key={`${language}-${index}`}
            >
              {language === 'all' ? null : ' #' + language}
            </p>
          ))}
        </div>
      </div>

      <h3>{name}</h3>
      {picture === '' ? (
        <i className="infos-link fab fa-github" onClick={handleInfo}></i>
      ) : (
        <img src={picture} loading="lazy" alt={name} onClick={handleInfo} />
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

        <span className="infos-link" onClick={handleInfo}>
          Voir infos
          <i className="fa fa-circle-info "></i>
        </span>
      </p>

      {showInfo && <Modal item={item} handleInfo={handleInfo} />}
    </div>
  );
};

export default Project;
