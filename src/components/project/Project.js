import React from 'react'
import './Project.css'

function Project() {
    
    return (
        <div className = 'project-card'>
            <div>
                <img className='project-img' src = {require (`../../images/Mody.png`)} alt = "profile"/>
            </div>
            <div className ='project-text'>
                <p><strong>Technologies Used:</strong> CSS HTML Node/Express</p>
                <p>Team project where a user can create tournament style brackets and interact with brackets other users have created.</p>
                <div className = 'project-link'>
                    <a href="https://github.com/meganjacobs97/MODY">Github Repo</a>
                    <a href="https://modybrackets.herokuapp.com/">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project;