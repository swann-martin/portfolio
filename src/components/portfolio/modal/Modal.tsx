import { PortfolioData } from '../../../data/portfolioData';
import './modal.scss';

const Modal = ({
  item,
  handleInfo
}: {
  item: PortfolioData;
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
    <div
      className="showInfos"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
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
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};
export default Modal;
