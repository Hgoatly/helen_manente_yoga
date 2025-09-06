import React from 'react';
import './AboutHero.css';
import AboutHeroImage from '../assets/helen_manente_about_collage_dt.png';

function AboutHero() {
    return(
        <>
            <div className="hero-container">
                <img className='about-hero-image' src={AboutHeroImage} alt="Collage of personal activities. Top left shows three people outdoors kneeling on grass. Next is a woman teaching yoga indoors beside papers and a yoga mat. In the center, a hiker with a backpack walks along a path on open moorland. To the right, a woman performs a headstand against a wall. Another photo shows a smiling woman holding a bow and standing next to an archery target with arrows in the center. Several images show stacks of yoga books, a close-up of a hand holding a pen, and books beside a cup of coffee. The bottom row includes a woman in a low lunge yoga pose indoors, a woman playing the flute, a group of hikers pausing on a trail to look out at the countryside, a person in a headstand at sunset on the beach, and a cozy living room with a wood-burning stove, table, and glass of wine." />
            </div>
        </>
    )
}

export default AboutHero;