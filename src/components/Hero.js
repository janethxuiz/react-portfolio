import './HeroStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <p>HI MY NAME IS JANETH</p>
            <h1>WELCOME</h1>
        <div>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        </div>
    </div>
  );
};

export default Hero;