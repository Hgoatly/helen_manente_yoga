import React from 'react';
import './Hero.css';

import heroImage from '../assets/helen_manente_hero_dt3.png';
import heroImageMobile from '../assets/helen_manente_hero_collage_mb2.jpg';
import helenLogo from '../assets/helen-yoga.svg';

function Hero() {
  return (
    <div className="hero-container">
      <picture>
        <source srcSet={heroImageMobile} media="(max-width: 768px)" />
        <img className="hero-image" src={heroImage} alt="Yoga pose" />
      </picture>
      <img className="helen-logo" src={helenLogo} alt="Helen Manente Yoga" />
    </div>
  );
}

export default Hero;
