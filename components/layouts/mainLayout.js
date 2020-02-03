import React, { Component, Fragment } from 'react';
import Head from 'next/head';

import Panel from "../includes/panels/panel";
import Toolbar from "../includes/Navigation/Toolbar/Toolbar";
import NavDrawer from '../includes/Navigation/NavDrawer/NavDrawer';
import Backdrop from '../includes/Navigation/Backdrop/Backdrop';
import classes from './MainLayout.module.css';

class MainLayout extends Component{
    state = {
        navDrawerOpen: false
    };

    navDrawerToggleClickHandler = () => {
        this.setState((prevState)=>{
            return {navDrawerOpen: !prevState.navDrawerOpen};
        });
    }

    render() {
        let navDrawer;
        let backdrop;

        if (this.state.navDrawerOpen) {
            navDrawer = <NavDrawer/>
            backdrop = <Backdrop />
        }

        return (
            <Fragment>
                <Head>
                    <title>Concierge</title>
                    <meta property="og:url" content={`${this.props.baseUrl}`} />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                          rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
                          rel="stylesheet" />
                    <link rel='stylesheet' href="/static/css/styles.css" />
                </Head>
                <div className={classes.mainLayoutContainer}>
                    <Toolbar navDrawerClickHandler={this.navDrawerToggleClickHandler} />
                    {NavDrawer}
                    {Backdrop}
                    <Panel />
                    <div className="main_container">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout;
