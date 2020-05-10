import React from 'react';

const styles ={
    tab: {
        border: '2px solid black',
        borderRadius: '5px',
        padding: '0px 10px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    }
}

function Tab(props) {
    return (
        <div style={styles.tab}>
            <p>{props.tabName}</p>
        </div>
    )
}

export default Tab;
