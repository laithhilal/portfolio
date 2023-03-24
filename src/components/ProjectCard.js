import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
    
  const [techStackVisible, setTechStackVisible] = useState(false);

  return (
    <div className='project-card'>
      <img src={project.imageUrl} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div
        className='tech-stack'
        onClick={() => setTechStackVisible(!techStackVisible)}
      >
        Tech Stack
        {techStackVisible ? (
          <i className='fas fa-angle-down' style={{ marginLeft: '5px' }}></i>
        ) : (
          <i className='fas fa-angle-up' style={{ marginLeft: '5px' }}></i>
        )}
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
  );
};

export default ProjectCard;
