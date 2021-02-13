import React from 'react'
import './portfolio.css';
import Mody from '../../images/Mody.png';
import Sav from '../../images/Screenshot (51).png';
import Mule from '../../images/Screenshot (24).png';
import Social from '../../images/social-distance.png';
import data from '../../data.js';
import Project from '../../Components/Project/Project';

export default function Portfolio() {
    return (
    <div>
        <div className = 'about-title-div'>
                <div className = 'about-color-block'></div>
                <h1>Portfolio Place</h1>
            </div>
        <div className = 'content-div'>
            <Project img = {Sav} tech = {data[1].projects[0].techs} description = {data[1].projects[0].description} title = {data[1].projects[0].title} depolyedSite = {data[1].projects[0].depolyedSite} />
            <Project img = {Mule} tech = {data[1].projects[1].techs} description = {data[1].projects[1].description} title = {data[1].projects[1].title} depolyedSite = {data[1].projects[1].depolyedSite} />
            <Project img = {Mody} tech = {data[1].projects[2].techs} description = {data[1].projects[2].description} title = {data[1].projects[2].title} depolyedSite = {data[1].projects[2].depolyedSite} />
            <Project img = {Social} tech = {data[1].projects[3].techs} description = {data[1].projects[3].description} title = {data[1].projects[3].title} depolyedSite = {data[1].projects[3].depolyedSite} />
        </div>
    </div>
    )
}
