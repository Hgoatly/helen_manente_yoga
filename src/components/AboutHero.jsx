import React from 'react';
import './AboutHero.css';
import AboutHeroImage from '../assets/helen-headstand.jpg';

function AboutHero() {
    return(
        <>
            <div className="hero-container">
                <img className='about-hero-image' src={AboutHeroImage} alt="Helen giving a yoga class" />
            </div>
        </>
    )
}

export default AboutHero;