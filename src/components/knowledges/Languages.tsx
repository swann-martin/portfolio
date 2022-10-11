import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const date1 = new Date('09/10/2020');
const now = new Date();
const day = now.getDay();
const month = now.getMonth();
const year = now.getFullYear();
const today = new Date(`${day}/${month}/${year}`);
const diffTime = Math.abs(
  (today as unknown as number) - (date1 as unknown as number),
);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffYears = Math.ceil(diffDays / 365);
console.log(diffTime + ' milliseconds');
console.log(diffDays + ' days');

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
};

export default Languages;
