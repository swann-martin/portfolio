import React, { Component } from 'react';

export class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, sourceCode, info, picture, deployedAt } =
      this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt={name} onClick={this.handleInfo} />
        <p className="infos">
          <a
            className="infos-link"
            href={deployedAt}
            target="_blank"
            rel="noopener noreferrer"
          >
            {deployedAt}
          </a>
          <span className="infos-link" onClick={this.handleInfo}>
            Voir infos
            <i className="fa fa-circle-info "></i>
          </span>
        </p>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="button close" onClick={this.handleInfo}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
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
        )}
      </div>
    );
  }
}

export default Project;
