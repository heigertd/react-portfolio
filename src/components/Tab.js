import React from 'react';

const styles ={
    tab: {
        border: '5px solid black',
        padding: '0px 10px'
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
