import React, { useState } from 'react';
import BodyComponent from './BodyComponent';
import Experiences from './Experiences';
import  {Link} from "react-router-dom";

const Header = () => {
    return(
        <body className="text-center">
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" style={{paddingLeft: '1rem'}}>Home</span>
                <span className="navbar-brand" >Education</span>
                <span className="navbar-brand">
                    <Link to="/experiences" style={{textDecoration: 'none', color: 'white'}}>Experiences</Link>
                </span>
                <span className="navbar-brand" >Skills</span>
                <span className="navbar-brand">
                    <Link to="/contact" style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
                </span>
            </nav>
        </body>
    );
}

export default Header;