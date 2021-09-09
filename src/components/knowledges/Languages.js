import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1 },
      { id: 2, value: "CSS", xp: 1.8 },
      { id: 3, value: "TypeScript", xp: 0.8 },
      { id: 4, value: "Php", xp: 1.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 1, value: "Bootstrap", xp: 0.5 },
      { id: 1, value: "Sass", xp: 1.2 },
      { id: 1, value: "Symfony", xp: 0.4 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}
