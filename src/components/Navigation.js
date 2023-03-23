import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './Navigation.css';

const Navigation = () => {
  const navRef = useRef(null);

  const scrollToNav = () => {
    const navElement = navRef.current;
    if (navElement) {
      const { top } = navElement.getBoundingClientRect();
      scroll.scrollTo(top + window.pageYOffset - 70, {
        duration: 500,
        smooth: true
      });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="bio" onClick={scrollToNav}>
            Bio
          </Link>
        </li>
        <li>
          <Link to="skills" onClick={scrollToNav}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" onClick={scrollToNav}>
            Projects
          </Link>
        </li>
      </ul>
      <div ref={navRef} className="navigation" />
    </nav>
  );
};

export default Navigation;
