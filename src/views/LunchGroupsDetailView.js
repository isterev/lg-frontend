"use strict";

import React from 'react';

import { LunchGroupDetail } from '../components/LunchGroupDetail';

import LunchGroupService from '../services/LunchGroupService';


export class LunchGroupsDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        LunchGroupService.getMovie(id).then((data) => {
            this.setState({
                movie: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteMovie(id) {
        LunchGroupService.deleteMovie(id).then((message) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <LunchGroupDetail movie={this.state.movie} onDelete={(id) => this.deleteMovie(id)}/>
        );
    }
}
