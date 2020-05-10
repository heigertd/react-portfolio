import React from 'react'

const styles ={

    container:{
        display:'flex',
        margin: '5px'
    },

    tech:{
        textAlign: 'center',
        width:'35%',
        border: '2px solid black',
        borderRadius: '10px 0px 0px 10px'
    },
}

function Experience(props) {
    let perc = props.perc
    return (
        <div style={styles.container}>
            
                <div style ={styles.tech}>
                    <p>{props.tech}</p>
                </div>
                <div style= {{border: '2px solid black',
                            width:`${perc}`,
                            backgroundImage: `linear-gradient(to right, rgba(255,0,0,1), rgba(255,0,0,1))`}} >

                </div>
            
        </div>
    )
}
export default Experience;