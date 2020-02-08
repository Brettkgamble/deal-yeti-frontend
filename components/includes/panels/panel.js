import React from 'react';
import classes from './panel.module.css';

const Panel = () => {
    return (
        <>
            <div style={{'text-align': "center"}}><h1>Coming Soon</h1></div>
            <div style={{'text-align': "center"}}><h3>It's Elusive</h3></div>
            <div className={classes.mainImg}>
            </div>
        </>
    )
}

export default Panel;