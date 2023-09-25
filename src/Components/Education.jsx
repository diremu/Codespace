import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Education = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/education">Education</Link>
      </nav>
    </header>
  );
};

export default Education;