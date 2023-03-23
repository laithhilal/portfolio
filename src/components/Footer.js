import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='social-media-links'>
        <a href='https://www.linkedin.com/in/laith-hilal-69b044234/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/laithhilal' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <div className='copyright-notice'>
        &copy; {currentYear} Laith Hilal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
