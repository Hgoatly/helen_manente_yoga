import React from 'react';
import './ClassesHero.css';
import ClassesCollage from '../assets/classes_collage.png';
import helenLogo from '../assets/sage_green_logo.svg';

function ClassesHero() {
    return(
        <>
            <div className="classes-hero-container">
            <h1 className="sr-only">Helen Manente Yoga Classes</h1>
            <picture>
        <source srcSet={ClassesCollage} media="(max-width: 768px)" />
                <img className='classes-hero-image' src={ClassesCollage} alt="Collage of personal activities. Top left shows three people outdoors kneeling on grass. Next is a woman teaching yoga indoors beside papers and a yoga mat. In the center, a hiker with a backpack walks along a path on open moorland. To the right, a woman performs a headstand against a wall. Another photo shows a smiling woman holding a bow and standing next to an archery target with arrows in the center. Several images show stacks of yoga books, a close-up of a hand holding a pen, and books beside a cup of coffee. The bottom row includes a woman in a low lunge yoga pose indoors, a woman playing the flute, a group of hikers pausing on a trail to look out at the countryside, a person in a headstand at sunset on the beach, and a cozy living room with a wood-burning stove, table, and glass of wine." />
                </picture>
                <img
                className="helen-logo"
                src={helenLogo}
                alt=""
                aria-hidden="true"
                />
                </div>
        </>
    )
}

export default ClassesHero;
