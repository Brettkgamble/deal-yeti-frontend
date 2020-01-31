import React from 'react';
import Link from 'next/link';
import classes from './header.module.css';

const Header = () => {
    return (
        <>
            <header>
                <div className={classes.mainHeader}>
                    <div className={[classes.container, classes.menuContainer].join(' ')}>
                        <div className={classes.logoContainer}>
                            <span className={classes.logoHelper}></span>
                            <Link href="/">
                                <a>
                                    <div className={classes.logo}>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={classes.topNavigation}>
                            <nav>
                                <ul>
                                    <li>
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