import React from 'react'
import './Story2.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function Story2() {
    return (
        <div>
            <Header name="Story2" />
            <div className="about-content">
                <Paper elevation={2} className="coming">
                    <h1>Coming Soon!</h1>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default Story2;