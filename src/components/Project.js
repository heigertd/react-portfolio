import React from 'react'

const styles = {
    img: {
        width: "100%",
        height: 'auto'
    },

    text:{
        width:"25%",
        height:'auto'
    }
}

function Project(props) {
    return (
        <div>
            <div>
                <img style = {styles.img} src = {props.src} alt = "profile"/>
            </div>
            <div>
                <p> {props.text}</p>
            </div>
        </div>
    )
}

export default Project;