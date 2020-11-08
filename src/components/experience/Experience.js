import React from 'react';
import './Experience.css'

export default function Experience(props) {
    return (
        <div className = 'experience-div'>
            <img src={props.image} />
            <p>{props.title}</p>
        </div>
    )
}