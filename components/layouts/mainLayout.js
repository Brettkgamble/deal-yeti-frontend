import React from 'react';
import Head from 'next/head';

import Panel from "../includes/panels/panel";
import Header from "../includes/header/header";

const MainLayout = (props) => (
    <>
        <Head>
            <title>Concierge</title>
            <meta property="og:url" content={`${props.baseUrl}`} />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
                  rel="stylesheet" />
            <link rel='stylesheet' href="/static/css/styles.css" />
        </Head>
        <div className="mainLayout_container">
            <Header/>
            <Panel />
            <div className="main_container">
                {props.children}
            </div>
        </div>
    </>
);

export default MainLayout;
