import React from "react";
import ClassesOverview from '../components/ClassesOverview';
import BadgellsWood from "../components/BadgellsWood";
import YogaAndMusic from "../components/YogaAndMusic"; 
import RoyalAcademyOfMusic from "../components/RoyalAcademyOfMusic";
import MetalYoga from "../components/MetalYoga";
import MindfulMeetings from "../components/MindfulMeetings";
import PrivateClasses from "../components/PrivateClasses";
import './Classes.css';
import RegularClasses from "../components/RegularClasses";

function Classes() {
    return(
        <>
        <div className="classes-container">
        <ClassesOverview />
        <RegularClasses />
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