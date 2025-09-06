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
        <img className="hero-image" src={heroImage} alt="Collage of yoga and community activities with a blurred central logo that reads Helen Manente Yoga. Photos include groups of people practicing yoga indoors under colorful lights, a class inside a large yellow dome with umbrellas overhead, and students lying on mats. Other images show people stretching on yoga mats in a fitness studio, a woman seated on a yoga mat with papers beside her, and a woman teaching a class. Additional outdoor photos feature a yoga pose in the woods and a group walk along a shaded path." />
      </picture>
      <img className="helen-logo" src={helenLogo} alt="Helen Manente Yoga" />
    </div>
  );
}

export default Hero;
