import { PortfolioData } from '../../../data/portfolioData';
import './modal.scss';

const Modal = (props: { item: PortfolioData; handleInfo: () => void }) => {
  let {
    name,
    languagesIcons,
    sourceCode,
    info,
    picture,
    deployedAt,
    languages
  } = props?.item;
  return (
    <div
      className="showInfos"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={props.handleInfo}
    >
      <div className="infosContent" style={{ opacity: 1 }}>
        <div className="head">
          <h2>{name}</h2>
          <div className="button close" onClick={props.handleInfo}>
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
export default Modal;
