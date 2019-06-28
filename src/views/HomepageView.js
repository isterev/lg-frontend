"use strict";

import React from 'react';

//import Home from '../components/Home';
import Page from "../components/Page";
import {Link} from "react-router-dom";

export class HomepageView extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
                <h1>Das ist eine tolle Homepage</h1>
                <br/><br/>

                <Link to={'groups'}><button>All Groups</button></Link>
            </Page>
        );

    }


/*
    render() {


        return (
            <Home/>
        );
    }*/

}