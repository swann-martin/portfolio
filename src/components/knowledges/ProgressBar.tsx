import React from 'react';

const ProgressBar = ({
  languages,
  className,
  title,
}: {
  languages: { id: number; value: string; xp: number }[];
  className: string;
  title: string;
}) => {
  return (
    <div className={className}>
      <h3>{title}</h3>

      <div className="years">
        <span>Années d'experience</span>
        <span>1 an</span>
        <span>{languages[0].xp} ans</span>
      </div>
      <div>
        {languages.map((item) => {
          let xpYears = languages[1].xp;
          let ProgressBar = (item.xp / xpYears) * 100 + '%';

          return (
            <div key={item.value + item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: ProgressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
