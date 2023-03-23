import React from 'react';
import './Header.css';
import YourImage from '../images/yourImage.png';

const Header = () => {
  return (
    <header>
      <div className="header-content">
      <img src={YourImage} alt='Your Alt Text' className='header-image' />
        <h1>Laith Hilal</h1>
        <h2>Full-stack Developer</h2>
        <p>JavaScript || TypeScript </p>
      </div>
    </header>
  );
};

export default Header;
