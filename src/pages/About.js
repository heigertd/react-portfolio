import React from 'react';
import Navbar from "../components/Navbar";
import Experience from "../components/Experience"

const styles = {
    about: {
        // height: '100vh',
    },

    img: {
        width:'90%',
        height: 'auto',
        borderRadius: '25px'
    },

    text:{
        textAlign: 'center',
        width: '90%'
    }
}

function About() {
    return (
        <div style ={styles.about}>
            <Navbar />
            <img style={styles.img} src ={ require("../images/transparent-pic.png")} alt="me"/>
            <p style={styles.text}>Hi! I am a Seattle-based budding web developer. I started web development after a friend of mine showed me a web site he had built by himself. The process intrigued me and I started teaching myself some basic coding with some help from some friends. Eventually I decided I needed some more structured training and attended a coding bootcamp through the University of Washington.</p>
            <h3>Experience</h3>
            {/* percents are out of 65% ex. 90% of 65 is 58.5 */}
            <Experience tech='HTML' perc = '58.5%' /> {/*} 90% {*/}
            <Experience tech='CSS' perc = '52%' /> {/*} 80% {*/}
            <Experience tech='JavaScript' perc = '49%' /> {/*} 75% {*/}
            <Experience tech='SCSS' perc = '13%' /> {/*} 20% {*/}
            <Experience tech='Node.js' perc = '26%' /> {/*} 40% {*/}
            <Experience tech='MySQL' perc = '26%' /> {/*} 40% {*/}
            <Experience tech='Mongo' perc = '13%' /> {/*} 20% {*/}
            <Experience tech='React.js' perc = '32.5%' /> {/*} 50% {*/}
        </div>
    )
}

export default About;
