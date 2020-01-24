import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            <title>Concierge</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
                  rel="stylesheet" />
            {/*Will probably not use Bootstrap*/}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
                  rel="stylesheet" />
            <link rel='stylesheet' href="/static/css/styles.css" />
        </Head>
        <div className="mainLayout_container">
            <Header/>
            <div className="main_container">
                {props.children}
            </div>
        </div>
    </>
);

export default MainLayout;
