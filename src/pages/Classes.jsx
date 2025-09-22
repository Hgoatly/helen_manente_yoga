import React from "react";
import ClassesOverview from '../components/ClassesOverview';
import BadgellsWood from "../components/BadgellsWood";
import YogaAndMusic from "../components/YogaAndMusic"; 
import RoyalAcademyOfMusic from "../components/RoyalAcademyOfMusic";
import MetalYoga from "../components/MetalYoga";
import MindfulMeetings from "../components/MindfulMeetings";
import PrivateClasses from "../components/PrivateClasses";
import './Classes.css';

function Classes() {
    return(
        <>
        <div className="classes-container">
        <ClassesOverview />
        <BadgellsWood />
        <YogaAndMusic />
        <RoyalAcademyOfMusic />
        <MetalYoga />
        <MindfulMeetings />
        <PrivateClasses />
        </div>
        </>
    )
}

export default Classes;