"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { HomepageView } from "./views/HomepageView";
import { LunchGroupsListView } from './views/LunchGroupsListView';
import { LunchGroupsDetailView }   from './views/LunchGroupsDetailView';
import { LunchGroupsFormView }   from './views/LunchGroupsFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";

import UserService from "./services/UserService";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Lunch Groups',
            routes: [
                { component: LunchGroupsListView , path: '/', exact: true},
                { component: LunchGroupsDetailView , path: '/show/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<LunchGroupsFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { render: (props) => {
                    if(UserService.isAuthenticated()) {
                        return (<LunchGroupsFormView {... props} />)
                    }
                    else {
                        return (<Redirect to={'/login'}/>)
                    }}, path: '/add',},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},
                { component: HomepageView, path: '/homepage'}
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

