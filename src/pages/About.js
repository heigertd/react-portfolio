import React from 'react'
import Navbar from "../components/Navbar";

const styles = {
    about: {
        height: '100vh',
    }
}

function About() {
    return (
        <div style ={styles.about}>
            <Navbar />
        </div>
    )
}

export default About;
