import React from 'react';
import classes from './NavDrawerToggleButton.module.css';

const navDrawerToggleButton = props => (
    <button className={classes.navDrawerToggleButton} onClick={props.click}>
        <div className={classes.navDrawerToggleButtonLine}></div>
        <div className={classes.navDrawerToggleButtonLine}></div>
        <div className={classes.navDrawerToggleButtonLine}></div>
    </button>
);

export default navDrawerToggleButton;