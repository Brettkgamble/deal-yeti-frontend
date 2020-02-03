import React from 'react';
import classes from './Toolbar.module.css';
import NavDrawerToggleButton from "../NavDrawer/NavDrawerToggleButton";

const toolbar = props => (
    <header className={classes.toolbar}>
        <nav className={classes.toolbarNavigation}>
            <div>
                <NavDrawerToggleButton click={props.navDrawerToggleClickHandler}/>
            </div>
            <div className={classes.toolbarLogo}>
                <a href="/">The Logo</a>
            </div>
            <div className={classes.spacer}></div>
            <div className={classes.toolbarNavigationItems}>
                <ul>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;