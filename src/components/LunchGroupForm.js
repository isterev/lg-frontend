"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './Page';


const style = { maxWidth: 500 };


class LunchGroupForm extends React.Component {


    constructor(props) {
        super(props);

        if(this.props.lunch != undefined) {
            this.state = {
                date : props.lunch.date,
                place : props.lunch.place,
                members : props.lunch.members,
                details: props.lunch.details,
                description: props.lunch.description

            };
        } else {
            this.state = {
                date : '',
                place : '',
                members: '',
                details: '',
                description: ''
            };
        }

        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangePlace = this.handleChangePlace.bind(this);
        this.handleChangeMembers = this.handleChangeMembers.bind(this);
        this.handleChangeDetails = this.handleChangeDetails.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlace(value) {
        this.setState(Object.assign({}, this.state, {place: value}));
    }

    handleChangeDate(value) {
        this.setState(Object.assign({}, this.state, {date: value}));
    }

    handleChangeMembers(value) {
        this.setState(Object.assign({}, this.state, {begintime: value}));
    }

    handleChangeDetails(value) {
        this.setState(Object.assign({}, this.state, {endtime: value}));
    }
    handleChangeDescription(value) {
        this.setState(Object.assign({}, this.state, {description: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let lunch = this.props.lunch;
        if(lunch == undefined) {
            lunch = {};
        }

        lunch.place = this.state.place;
        lunch.date = this.state.date;
        lunch.members = this.state.members;
        lunch.details = this.state.details;
        lunch.description = this.state.description;

        this.props.onSubmit(lunch);
    }

    render() {
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Place"
                            id="PlaceField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.place}
                            onChange={this.handleChangePlace}
                            errorText="Place is required"/>
                        <TextField
                            label="Date"
                            id="DateField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.date}
                            onChange={this.handleChangeDate}
                            errorText="Date is required"/>
                        <TextField
                            label="Members"
                            id="MembersField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.members}
                            onChange={this.handleChangeMembers}/>
                        <TextField
                            label="Details"
                            id="DetailsField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.details}
                            onChange={this.handleChangeDetails}
                            errorText="Endtime is required"/>
                        <TextField
                            label="Description"
                            id="DesriptionField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.description}
                            onChange={this.handleChangeDescription()}/>


                        <Button id="submit" type="submit"
                                disabled={this.state.place == undefined || this.state.place == '' || this.state.date == undefined || this.state.date == '' || this.state.members == undefined || this.state.members == ''|| this.state.details == undefined || this.state.details == ''|| this.state.description == undefined || this.state.description == ''}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
}

export default withRouter(LunchGroupForm);