import React from 'react';

const OtherSkills = () => {
  const hobbies: {
    name: string;
    icon: string;
  }[] = [
    { name: 'Climbing Sports', icon: 'fas fa-mountain' },
    { name: 'Hiking', icon: 'fas fa-hiking' },
    { name: 'Environment', icon: 'fas fa-seedling' }
  ];

  const skills = ['english', 'Scrum', 'git', 'figma', 'linux'];

  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          {skills?.map((skill) => (
            <li key={skill}>
              <i className="fas fa-check-square"></i>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hobbies" style={{ padding: 0, marginTop: '.5rem' }}>
        <h3>Intérêts</h3>
        <ul>
          {hobbies?.map((hobbies) => (
            <li key={hobbies?.name} className="hobby">
              <i className={hobbies?.icon}></i>
              <span>{hobbies?.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
