import { Suspense, useState } from 'react';
import { PortfolioData } from '../../../data/portfolioData';
import Modal from '../modal/Modal';
import './project.scss';

export const Project = ({
  item,
  handleRadio,
  selectedLanguage,
  showModal,
  showInfo,
  setShowInfo,
  handleInfo
}: {
  item: PortfolioData;
  selectedLanguage: string;
  showModal: boolean;
  showInfo?: PortfolioData;
  setShowInfo: (item: PortfolioData) => void;
  handleRadio: (event: any) => void;
  handleInfo: () => void;
}) => {
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <i
            className="infos-link fab fa-github"
            onClick={() => {
              setShowInfo(item);
              handleInfo();
            }}
          ></i>
        </div>
      ) : (
        <Suspense>
          <img
            src={picture}
            loading="lazy"
            alt={name}
            onClick={() => {
              setShowInfo(item);
              handleInfo();
            }}
          />
        </Suspense>
      )}

      <div className="infos">
        {!!deployedAt && deployedAt !== '' && (
          <a
            className="infos-link"
            href={deployedAt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="infos-link fa fa-eye"
              onClick={() => {
                setShowInfo(item);
                handleInfo();
              }}
            ></i>
          </a>
        )}

        <span
          title="See Source code"
          className="infos-link"
          onClick={() => {
            setShowInfo(item);
            handleInfo();
          }}
        >
          <i className="fa fa-circle-info "></i>
        </span>
      </div>
    </div>
  );
};

export default Project;
