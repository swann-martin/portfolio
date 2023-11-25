import { experienceData } from "../../data/portfolioData";

const Experience = () => {
  const title = "Experience";

  return (
    <div className="experience">
      <h3>{title}</h3>
      {experienceData.map((exp, index) => (
        <div className={`exp-${index + 1}`} key={`exp-${index + 1}`}>
          <h4>{exp.jobTitle}&nbsp;</h4>
          <h5>
            <a
              href={exp.companyLink}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {exp.company}
            </a>
          </h5>
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
