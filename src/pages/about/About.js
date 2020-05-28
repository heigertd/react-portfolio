import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Experience from "../../components/experience/Experience";
import './About.css'



function About() {
    
    return (
        <div>
        {/* <Navbar /> */}
        <div className = 'about'>
            <div className = 'me'>
                <img className = 'about-img' src ={ require("../../images/transparent-pic.png")} alt="me"/>
                <p className = 'about-text'>So who is this guy? I am a Seattle-based web developer. I started web development after a friend of mine showed me a web site he had built by himself. The process intrigued me and I started teaching myself some basic coding with some help from some friends. Eventually I decided I needed some more structured training and eventually recieved my full-stack certification through the University of Washington.</p>
            </div>
            <div className='experience'>
                <h1 className = 'experience-title'><u>Experience</u></h1>
                <div>
                    {/* percents are out of 65% ex. 90% of 65 is 58.5 */}
                    <Experience tech='HTML' perc = '58.5%' /> {/*} 90% {*/}
                    <Experience tech='CSS' perc = '52%' /> {/*} 80% {*/}
                    <Experience tech='JavaScript' perc = '49%' /> {/*} 75% {*/}
                    <Experience tech='SCSS' perc = '13%' /> {/*} 20% {*/}
                    <Experience tech='Node/Express' perc = '32.5%' /> {/*} 50% {*/}
                    <Experience tech='MySQL' perc = '26%' /> {/*} 40% {*/}
                    <Experience tech='Mongo' perc = '13%' /> {/*} 20% {*/}
                    <Experience tech='React.js' perc = '32.5%' /> {/*} 50% {*/}
                </div>
            </div>
        </div>
        </div>
    )
   
}

export default About;
