import React from "react";
import ClassesOverview from '../components/ClassesOverview';
import BadgellsWood from "../components/BadgellsWood";
import YogaAndMusic from "../components/YogaAndMusic"; 
import RoyalAcademyOfMusic from "../components/RoyalAcademyOfMusic";
import MetalYoga from "../components/MetalYoga";
import MindfulMeetings from "../components/MindfulMeetings";
import PrivateClasses from "../components/PrivateClasses";

function Classes() {
    return(
        <>
        <ClassesOverview />
        <BadgellsWood />
        <YogaAndMusic />
        <RoyalAcademyOfMusic />
        <MetalYoga />
        <MindfulMeetings />
        <PrivateClasses />
        </>
    )
}

export default Classes;