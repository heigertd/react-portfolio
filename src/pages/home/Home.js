import React from 'react';
import './Home.css'
import sal from 'sal.js';
// @import './node_modules/sal.js/dist/sal.css'


function Home() {
    sal();
    return (
        <div className = 'home'>
            <h1 className='home-text'>Devin Heigert</h1>
            <h3 className = 'home-text'>Seattle-based Full-stack Developer</h3>
        </div>
    )
}

export default Home;
