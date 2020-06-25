import React from 'react';
import {useEffect} from 'react';
import './Home.css'
import sal from 'sal.js';
// @import './node_modules/sal.js/dist/sal.css'


function Home() {

    useEffect(() => {
        sal({
            threshold: .25,
            once: false,
        
        });
    }, [])

    return (
        <div  className = 'home'>
            <h1 data-sal = 'fade'  className='home-text'>Devin Heigert</h1>
            <h3 data-sal = 'fade' className = 'home-text'>Seattle-based Full-stack Developer</h3>
        </div>
    )
}

export default Home;
