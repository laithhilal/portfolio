import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [techStackVisible, setTechStackVisible] = useState(false);

  return (
    <div className='project-card'>
      <img src={project.imageUrl} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className='card-footer'>
        <div
          className='tech-stack'
          onClick={() => setTechStackVisible(!techStackVisible)}
        >
          Tech Stack
          {techStackVisible && (
            <div className='tech-stack-dropdown'>
              {project.techStack}
            </div>
          )}
        </div>
        <div className='project-links'>
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
