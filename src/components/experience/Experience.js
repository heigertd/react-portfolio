import React from 'react'
import {useEffect} from 'react'
import './Experience.css'
import sal from 'sal.js';


function Experience(props) {

    useEffect(() => {
        sal({
            threshold: 1,
            once: false,
        
        });
    }, [])

    let perc = props.perc
    return (
        <div data-sal = 'fade' className='experience-tech'>
            <img src = {props.icon} />  
            <p>{props.tech}</p> 
        </div>
    )
}
export default Experience;