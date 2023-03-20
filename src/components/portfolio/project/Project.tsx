import { useState } from "react";
import { PortfolioData } from "../../../data/portfolioData";
import Modal from "../modal/Modal";
import "./project.scss";

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
              className={language === "all" ? "" : "tag"}
              key={`${language}-${index}`}
            >
              {language === "all" ? null : " #" + language}
            </p>
          ))}
        </div>
      </div>

      <h3>{name}</h3>
      {picture === "" ? (
        <i className="infos-link fab fa-github" onClick={handleInfo}></i>
      ) : (
        <img src={picture} alt={name} onClick={handleInfo} />
      )}

      <p className="infos">
        {!!deployedAt && deployedAt !== "" && (
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
