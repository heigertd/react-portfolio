import React from 'react'
import Project from '../components/Project'


const styles = {
    portfolio: {
        // height: '100vh',  add when screen is large
    }
}

function Portfolio() {
    return (
        <div style = {styles.portfolio}>
            <p>Portfolio</p>
            <Project src="http://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg" text = "portfolio piece one" />
            <Project src ="https://tse3.mm.bing.net/th?id=OIP.1c1MsPnEkdQOikJOJNbEEwHaFj&pid=Api&P=0&w=242&h=182" text = 'portfolio piece two'/>
            <Project src='https://tse2.mm.bing.net/th?id=OIP.JFYMCuwzHMR55X4EBTkCkQHaCz&pid=Api&P=0&w=478&h=181' text = 'portfolio piece three' />
        </div>
    )
}

export default Portfolio;
