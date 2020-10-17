import React from 'react'
import './Story2.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function Story2() {
    return (
        <div>
            <Header name="「15年越しの絆」" />
            <div className="story2-content">
                <Paper elevation={2} className="content-paper explain">
                    <div className="content-title">Coming soon!</div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default Story2;