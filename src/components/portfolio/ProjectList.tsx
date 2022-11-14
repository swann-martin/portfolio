import React, { Component } from 'react';
import { PortfolioData, portfolioData } from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: 'react' },
      { id: 2, value: 'typescript' },
      { id: 3, value: 'javascript' },
      { id: 4, value: 'flutter' },
      { id: 5, value: 'php' },
      { id: 6, value: 'all' },
    ],
    selectedRadio: 'all',
  };

  handleRadio = (event: any) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

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
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item: PortfolioData) =>
              item.languages.includes(selectedRadio),
            )
            .map((item: PortfolioData) => {
              return <Project key={item?.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}
