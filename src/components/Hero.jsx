import React from 'react';
import './Hero.css';


import heroImage from '../assets/helen-manente-hero.jpg';
import helenLogo from '../assets/helen-yoga.svg';

function Hero() {
  return (
    <div className="hero-container">
      <img className='hero-image' src={heroImage} alt="Yoga pose" />
      <img className='helen-logo' src={helenLogo} alt="Helen Manente Yoga" />
    </div>
  );
}


export default Hero;
