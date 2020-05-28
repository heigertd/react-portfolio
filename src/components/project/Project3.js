import React from 'react'


function Project3() {
    
    return (
        <div className = 'project-card'>
            <div>
                <img className='project-img' src = {require (`../../images/Screenshot (21).png`)} alt = "profile"/>
            </div>
            <div className ='project-text'>
            <p><strong>Work Day Calendar</strong></p>
                <p><strong>Technologies Used:</strong> CSS HTML Javascript</p>
                <p>Front-end project where you can see a daily calender and save plans to local storage. The styling will change depending on the hour you're in.</p>
                <div className = 'project-link'>
                    <a href="https://github.com/heigertd/work-day">Github Repo</a>
                    <a href="https://heigertd.github.io/work-day/">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project3;