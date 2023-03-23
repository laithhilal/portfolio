import React from 'react';
import './Projects.css';
import Project1Image from '../images/project1.png';
import Project2Image from '../images/project2.png';
import Project3Image from '../images/project3.png';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      name: 'E-commerce Website',
      description: 'Website where you can shop for products. Authentication in the backend is required and each account has his own cart and accessibilty to the website based on their role',
      imageUrl: Project1Image,
      githubUrl: 'https://github.com/laithhilal/e-commerce-authentication',
      techStack: 'JavaScript, React, Express, Node',
    },
    {
      name: 'MilkStore',
      description: 'Milk store where can search for different types of milks or filter based on prefernce. Then u can click on one of the products and slide the quantity required to order',
      imageUrl: Project2Image,
      githubUrl: 'https://github.com/laithhilal/milkStore',
      techStack: 'TypeScript, React, Express, Node.',
    },
    {
      name: 'Hostr-eventApp',
      description: 'Users can sign in and add events or search for them while also each user has their own profile page with all events created.',
      imageUrl: Project3Image,
      githubUrl: 'https://github.com/laithhilal/final-project-for-salt-event-app',
      techStack: 'Javascript, MongoDB, Express, React, Node, Auth0.',
    },
    // Add more projects here...
  ];

  return (
    <div id='projects'>
      <h2>Projects</h2>
      <div className='projects-grid'>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
