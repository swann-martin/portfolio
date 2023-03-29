const Experience = () => {
  const title = 'Experience';

  const experienceInfo = [
    {
      jobTitle: 'Freelance React Developer',
      company: 'Freelance Developer | BELGIUM',
      date: 'Now',
      summary: 'Development of websites and apps in React, React Native',
      skills: 'React, React Native, Supabase, Firebase, Git',
      softSkills: 'Self-organized, Autonomous, Problem Solving,'
    },
    {
      jobTitle: 'Developer',
      company: 'Beecoming | FRANCE',
      date: 'December 2021 - November 2022',
      summary: 'Hybrid & web development',
      skills:
        'React Native, Node, Reactjs, Angular, Ionic, git, Jira, Office 360',
      softSkills: 'Self-organized, Autonomy, problem solving, team work'
    },
    {
      jobTitle: 'Trainee Developer',
      company: "Webforce 3 & O'clock",
      date: 'Decembre 2020  - Septembre 2021',
      summary: 'Training in Web & Mobile Developement',
      skills: 'React, Angular, Ionic, Php, Symfony, Mysql, Scss, Wordpress',
      softSkills: 'Certification Techniques de développement Web RS1448',
      softSkills2: "Certification Techniques d'intégration RSRS1447"
    }
  ];

  return (
    <div className="experience">
      <h3>{title}</h3>
      {experienceInfo.map((exp, index) => (
        <div className={`exp-${index + 1}`} key={`exp-${index + 1}`}>
          <h4>{exp.jobTitle}&nbsp;</h4>
          <h5>{exp.company}</h5>
          <h6>{exp.date}</h6>
          <ul>
            <li>{exp.summary}</li>
            <li>{exp.skills}</li>
            <li>{exp.softSkills}</li>
            {!!exp?.softSkills2 && <li>{exp?.softSkills2}</li>}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
