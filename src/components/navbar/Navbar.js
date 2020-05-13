import React from 'react'
import Tabs from "../Tab"

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}

function Navbar() {
    return (
        <div>
            <div style={styles.navbar}>
                <Tabs tabName = 'Home' />
                <Tabs tabName = 'About Me' />
                <Tabs tabName = 'Portfolio' />
                <Tabs tabName = 'Contact' />   
            </div>
            
        </div>
    )
}

export default Navbar;
