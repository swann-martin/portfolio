import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const date1 = new Date('09/10/2020');
const now = new Date().toDateString();
const today = new Date(now);
const diffTime = Math.abs(today.getTime() - date1.getTime());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffYears = Math.ceil(diffDays / 365);

const Languages = () => {
  const [languages, setLanguages] = useState([
    { id: 1, value: 'JavaScript', xp: diffYears },
    { id: 2, value: 'SCSS', xp: diffYears },
    { id: 3, value: 'TypeScript', xp: diffYears - 0.25 },
    { id: 4, value: 'Php', xp: 1 },
  ]);
  const [frameworks, setFrameworks] = useState([
    { id: 1, value: 'React', xp: diffYears - 0.4 },
    { id: 2, value: 'Bootstrap', xp: diffYears },
    { id: 3, value: 'Flutter', xp: diffYears - 1.9 },
    { id: 4, value: 'Symfony', xp: 0.5 },
  ]);

  return (
    <div className="languagesFrameworks">
      <ProgressBar
        diffYears={diffYears}
        languages={languages}
        className="languagesDisplay"
        title="languages"
      />
      <ProgressBar
        diffYears={diffYears}
        languages={frameworks}
        className="frameworksDisplay"
        title="frameworks & bibliothèques"
      />
    </div>
  );
};

export default Languages;
