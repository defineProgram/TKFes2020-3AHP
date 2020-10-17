import React from 'react'
import './TimeTable.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function TimeTable() {
    return (
        <div>
            <Header name="Time Table" />
            <div className="timetable-content">
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">Coming soon!</div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default TimeTable;