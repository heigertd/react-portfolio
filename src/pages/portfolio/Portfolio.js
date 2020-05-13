import React from 'react'
import Project from '../../components/project/Project';
import Project2 from '../../components/project/Project2';
import Project3 from '../../components/project/Project3';
import Project4 from '../../components/project/Project4';
import './Portfolio.css'

function Portfolio() {
    return (
        <div className = 'portfolio'>
            <div>
                <h1 className = 'portfolio-title'><u>Portfolio</u></h1>
            </div>
            <div className = 'project-row'>
            <Project />
            <Project2 />
            <Project3 />
            <Project4 />
            </div>
        </div>
    )
}

export default Portfolio;
