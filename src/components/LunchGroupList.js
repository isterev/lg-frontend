"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { LunchGroupListRow } from './LunchGroupListRow';
import Page from './Page'

const dataTableStyle = {
  'margin-bottom': '36px'
};

export const LunchGroupList = ({data, onDelete}) => (
    <Page>
        <DataTable plain style={dataTableStyle}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Date/ Time</TableColumn>
                    <TableColumn>Place</TableColumn>
                    <TableColumn>Members</TableColumn>
                    <TableColumn>Details</TableColumn>
                    <TableColumn>More Details</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((movie, i) => <LunchGroupListRow key={i} movie={movie} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </Page>
);

