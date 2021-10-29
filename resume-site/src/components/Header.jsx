import React, { useState } from 'react';
import BodyComponent from './BodyComponent';
// import ContactForm from './ContactForm';

const Header = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const contactOnClick = (e) => {
        if (!showContactForm) {
            setShowContactForm(true);
        } else {
            setShowContactForm(false);
        }
    }

    console.log("show contact", showContactForm)
    return(
        <body className="text-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" style={{paddingLeft: '1rem'}}>Home</span>
                <span className="navbar-brand" >Education</span>
                <span className="navbar-brand" >Experiences</span>
                <span className="navbar-brand" >Skills</span>
                <span className="navbar-brand" onClick={(e) => contactOnClick(e)}>Contact</span>
            </nav>
            {showContactForm ? <BodyComponent/> : null}
        </body>
    );
}

export default Header;