import React from 'react'
import './TimeTable.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function TimeTable() {
    return (
        <div>
            <Header name="Time Table" />
            <div className="about-content">
                <Paper elevation={2} className="coming">
                    <h1>Coming Soon!</h1>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default TimeTable;