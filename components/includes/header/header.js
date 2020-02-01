import React from 'react';
import Link from 'next/link';
import classes from './header.module.css';

const Header = () => {
    return (
        <>
            <header>
                <div className={classes.mainHeader}>
                    <div className={[classes.container, classes.mainHeaderContainer].join(' ')}>
                        <div className={classes.mainHeaderLogoContainer}>
                            <span className={classes.mainHeaderLogoHelper}></span>
                            <Link href="/">
                                <a>
                                    <div className={classes.mainHeaderLogo}>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={classes.topNavigation}>
                            <nav>
                                <ul className={classes.mainNavItems}>
                                    <li className={classes.mainNavItem}>
                                        <a href="/">Packages</a>
                                    </li>
                                    <li>
                                        <a href="/">Customers</a>
                                    </li>
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/">Login</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;