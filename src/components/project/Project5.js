import React from 'react'


function Project5() {
    
    return (
        <div className = 'project-card'>
            <div>
                <img className='project-img' src = {require (`../../images/Screenshot (24).png`)} alt = "profile"/>
            </div>
            <div className ='project-text'>
                <p><strong>Pack Mule</strong></p>
                <p><strong>Technologies Used:</strong> CSS HTML Javascript Node MySql</p>
                <p>Full stack project where a user can create an account and find people to carry their stuff for them when they go hiking.</p>
                <div className = 'project-link'>
                    <a href="https://github.com/heigertd/pack-mule-front">Front-end Github Repo</a>
                    <a href="https://github.com/heigertd/pack-mule-back">Back-end Github Repo</a>
                    <a href='http://pack-mule.herokuapp.com/'>Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project5;