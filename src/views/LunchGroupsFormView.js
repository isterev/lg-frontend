"use strict";

import React from 'react';

import { LunchGroupForm } from '../components/LunchGroupForm';

import LunchGroupService from '../services/LunchGroupService';


export class LunchGroupsFormView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.history.location.pathname == '/add') {
            this.setState({
                loading: false,
                lunch: undefined,
                error: undefined
            });
        }
        else if(this.props.location.state != undefined && this.props.location.state.lunch != undefined) {
            this.setState({
                loading: false,
                lunch: this.props.location.state.lunch,
                error: undefined
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });

            let id = this.props.match.params.id;

            LunchGroupService.getLunchGroup(id).then((data) => {
                this.setState({
                    lunch: data,
                    loading: false,
                    error: undefined
                });
            }).catch((e) => {
                console.error(e);
            });
        }
    }

    updateLunch(lunch) {
        if(this.state.lunch == undefined) {
            LunchGroupService.createLunchGroup(lunch).then((data) => {
                this.props.history.push('/groups');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating lunchgroup'}));
            });
        } else {
            LunchGroupService.updateLunchGroup(lunch).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating lunchgroup'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (<LunchGroupForm lunch={this.state.lunch} onSubmit={(lunch) => this.updateLunch(lunch)} error={this.state.error} />);
    }
}
