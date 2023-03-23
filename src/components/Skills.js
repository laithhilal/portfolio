import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = {
    Languages: ['JavaScript', 'TypeScript'],
    Frontend: [
      'React',
      'Redux',
      'Webpack',
      'HTML',
      'jQuery',
      'CSS/SASS/styled-components',
    ],
    Backend: [
      'NodeJS', 
      'ExpressJS',
      'REST', 
      'GraphQL', 
      'MongoDB/PostgreSQL'
    ],
    Tools: [
      'Visual Studio Code',
      'Handlebars/Mustache',
      'Mocha/Jest',
      'Docker',
      'Git+GitHub',
      'GitHub Actions',
      'AWS',
      'Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku, Contentful)',
      'TDD',
      'Agile work methods',
    ],
  };

  return (
    <div id='skills'>
      <h2>Technical Skills</h2>
      <div className="skills-container">
      <ul>
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <li key={category}>
            <strong>{category}:</strong>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Skills;
