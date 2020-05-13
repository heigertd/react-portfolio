import React from 'react'


function Project4() {
    
    return (
        <div className = 'project-card'>
            <div>
                <img className='project-img' src = {require (`../../images/Screenshot (22).png`)} alt = "profile"/>
            </div>
            <div className ='project-text'>
                <p><strong>Technologies Used:</strong> CSS HTML Javascript</p>
                <p>Front-end project where you can take a quick timed quiz. Results are saved to local stoarge and you can see how you compare to other scores saved.</p>
                <div className = 'project-link'>
                    <a href="https://github.com/heigertd/quiz-timed">Github Repo</a>
                    <a href="https://heigertd.github.io/quiz-timed/">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project4;