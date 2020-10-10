import React from 'react'
import './Footer.css'
import {Divider} from '@material-ui/core'

function Footer(){
    return (
        <footer>
            <Divider />
            <div className="footer-content">
                Copyright &copy; 2020 Tsukukoma 3AHR.
            </div>
        </footer>
    );
}
export default Footer;