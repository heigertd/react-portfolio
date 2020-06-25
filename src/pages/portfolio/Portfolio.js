import React from 'react'
import Project from '../../components/project/Project';
import Project2 from '../../components/project/Project2';
import Project3 from '../../components/project/Project3';
import Project4 from '../../components/project/Project4';
import './Portfolio.css'
import Project5 from '../../components/project/Project5';
import {useEffect} from 'react'
import sal from 'sal.js'

function Portfolio() {

    useEffect(() => {
        sal({
            threshold: .25,
            once: false,
        
        });
    }, [])

    return (
        <div className = 'portfolio'>
            <div>
                <h1 className = 'portfolio-title'><u>Portfolio</u></h1>
            </div>
            <div data-sal = 'fade' className = 'project-row'>
                <Project />
                <Project2 />
                <Project3 />
            </div>
            <div data-sal = 'fade' className = 'project-row'>
                <Project4 />
                <Project5 />
            </div>
        </div>
    )
}

export default Portfolio;
