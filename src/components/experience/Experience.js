import React from 'react'
import './Experience.css'

function Experience(props) {
    let perc = props.perc
    return (
        <div className='experience-container'>
                <div className = 'experience-tech'>
                    <p style={{color: '#2BAE66FF'}}>{props.tech}</p>
                </div>
                <div style= {{border: '2px solid #2BAE66FF',
                            width:`${perc}`,
                            backgroundImage: `linear-gradient(to right, rgba(255,0,0,1), rgba(255,0,0,1))`}} >
                </div>   
        </div>
    )
}
export default Experience;