import React from 'react'


function Project2() {
    
    return (
        <div className = 'project-card'>
            <div>
                <img className='project-img' src = {require (`../../images/social-distance.png`)} alt = "profile"/>
            </div>
            <div className ='project-text'>
                <p><strong>Social Distance</strong></p>
                <p><strong>Technologies Used:</strong> CSS HTML Javascript</p>
                <p>Front-end team project where you can come and see updates about the COVID-19 pandemic or got to the distance side and find distractions from it.</p>
                <div className = 'project-link'>
                    <a href="https://github.com/bbelka/covidDistractions">Github Repo</a>
                    <a href="https://bbelka.github.io/covidDistractions/">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project2;
