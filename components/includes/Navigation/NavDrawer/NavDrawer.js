import React from 'react';
import classes from './NavDrawer.module.css';

const navDrawer = props => (
    <nav className={classes.navDrawer}>
        <ul>
            <li><a href="/">About Us</a></li>
        </ul>
        <ul>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
);

export default navDrawer;
