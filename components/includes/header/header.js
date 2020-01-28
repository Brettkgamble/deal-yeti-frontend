import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <>
            <header>
                <div className={classes.wrapper}>
                    <img src="/static/images/retired.jpg" />
                </div>
            </header>
        </>
    )
}

export default Header;