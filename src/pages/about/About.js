import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Experience from "../../components/experience/Experience";
import './About.css'



function About() {
    
    return (
    <div className = 'about'>
            <div className = 'me'>
                <img  className = 'about-img' src ={ require("../../images/transparent-pic.png")} alt="me"/>
                <p className = 'about-text'>So who is this guy? I am a Seattle-based web developer. I started web development after a friend of mine showed me a web site he had built by himself. The process intrigued me and I started teaching myself some basic coding with some help from some friends. Eventually I decided I needed some more structured training and eventually recieved my full-stack certification through the University of Washington.</p>
            </div>
            <div>
                <h1 className = 'experience-title'><u>Experience</u></h1>
                <div className = 'icons-div'>
                    <Experience tech = 'HTML' icon = "https://img.icons8.com/material-outlined/60/000000/html-5.png" />
                    <Experience tech = 'CSS' icon = "https://img.icons8.com/ios-glyphs/60/000000/css3.png"/> 
                    <Experience tech = 'JavaScript' icon ="https://img.icons8.com/ios-filled/60/000000/javascript.png" />
                    <Experience tech = 'React.js' icon = "https://img.icons8.com/officel/60/000000/react.png" />
                    <Experience tech = 'Node/Express.js' icon = "https://img.icons8.com/windows/60/000000/nodejs.png"/>
                    <Experience tech = 'MySql' icon = "https://img.icons8.com/ios-filled/60/000000/mysql-logo.png"/>
                    <Experience tech = 'Mongo' icon = "https://img.icons8.com/color/60/000000/mongodb.png"/>  
                </div>     
            </div>
        
    </div>
    )
   
}

export default About;
