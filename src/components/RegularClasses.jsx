import React from "react";
import './ClassesOverview.css';
import {Link} from "react-router-dom";

function RegularClasses() {
    return(
        <>
        <section className="classes-section" id="regular-classes">
            <p className="classes-text">Please see my current timetable:</p>
            <ul className="classes-list">
                <li className="classes-list-item"><strong>Monday:</strong> 10-11am NRG GYM Gravesend (book via NRG)</li>
                <li className="classes-list-item"><strong>Thursday:</strong> 7-8pm NRG GYM Gravesend (book via NRG)</li>
                <li className="classes-list-item"><strong>Friday:</strong> 9:15-10:30 Riverview Park Scout Hall (refreshments and social afterwards – no booking required)</li>
                <li className="classes-list-item">6-7pm Hangloose Adventure Bluewater (book via Hangloose)</li>
            </ul>
            <p className="classes-text">Once a month, I run YogaLab, a two-hour workshop at NRG GYM Gravesend, which aims to dive deeper into the poses, breathing and meditation practices we’ve been exploring in my weekly classes. We’ve tried headstands, splits and other fun techniques in these sessions!</p>
        </section>
        </>
    )
}

export default RegularClasses;