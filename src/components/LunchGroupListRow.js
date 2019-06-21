"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from './SimpleLink';

import UserService from '../services/UserService';


export class LunchGroupListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn>{this.props.lunch.place}</TableColumn>
                <TableColumn>{this.props.lunch.date}</TableColumn>
                <TableColumn>{this.props.lunch.begintime}</TableColumn>
                <TableColumn>{this.props.lunch.endtime}</TableColumn>
                <TableColumn>{this.props.lunch.description}</TableColumn>
                /*{UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.movie._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.movie._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }
                */
            </TableRow>
        );
    }
}