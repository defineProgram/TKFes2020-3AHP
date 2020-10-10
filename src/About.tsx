import React from 'react'
import './About.css'
import Header from './Header'
import Footer from './Footer'


import { Paper } from '@material-ui/core';

function About() {
    return (
        <div>
            <Header name="About" />
            <div className="about-content">
                <Paper elevation={2} className="coming">
                    <h1>Coming Soon!</h1>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default About;