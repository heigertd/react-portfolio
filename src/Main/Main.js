import React, {useState, useEffect} from 'react';
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'

import './Main.css';

export default function Main() {
    return (
        <div>
            <div className = 'all-div'>
                <div className = 'name-div'>
                    <h1>Devin Heigert</h1>
                </div>
                <div className = 'main-content'>
                    <div className = 'box1 shrink'>
                        <div className='unhidden'>
                            <div className = 'color-block'></div>
                            <div className = 'section-title'>About Avenue</div>
                        </div>
                    </div>

                    <div className = 'box2 shrink'>
                        <div className='unhidden'>
                            <div className = 'color-block'></div>
                            <div className = 'section-title'>Portfolio Place</div>
                        </div>
                    </div>

                    <div className = 'box3 shrink'>
                        <div className='unhidden'>
                            <div className = 'color-block'></div>
                            <div className = 'section-title'>Contact Center</div>
                        </div>
                        
                    </div>
                </div>
            </div>
                <About />
                <Portfolio />
                <Contact />
        </div>
    )
}