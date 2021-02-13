import React from 'react'
import './about.css'

import data from '../../data.js';
import Experience from '../../Components/Experience/Experience';
import Me from '../../images/imageedit_3_6701281239.png';

export default function About() {
    return (
        <div>
            <div className = 'about-title-div'>
                <div className = 'about-color-block'></div>
                <h1>About Avenue</h1>
            </div>
            <div className = 'about-content-div'>
                <div className = 'text-div'>
                    <p>{data[0].con1}</p>
                </div>
                <div className = 'img-div'>
                    <img className = 'me' src={Me} />
                </div>
                <div>
                    <h3>Experience</h3>
                    <div className = 'xp-div'>
                        {data[0].xp.map(element => { 
                            return <Experience image = {element.image} title = {element.title} />
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )
}
