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

                <Link to={'login'}><button>Login</button></Link>
            </Page>
        );

    }



    /*
    constructor(props) {
        super(props);
    }
    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Home></Home>
        );
    }*/

}