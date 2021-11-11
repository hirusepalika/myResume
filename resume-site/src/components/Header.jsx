import React, { useState } from 'react';
import BodyComponent from './BodyComponent';
import Experiences from './Experiences';
// import ContactForm from './ContactForm';

const Header = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showExperiences, setShowExperiences] = useState(false);
    const contactOnClick = (e) => {
        if (!showContactForm) {
            setShowContactForm(true);
        } else {
            setShowContactForm(false);
        }
    }
    
    const experiencesOnClick = (e) => {
        if (!showExperiences) {
            setShowExperiences(true);
        } else {
            setShowExperiences(false);
        }
    }

    // TODO: the rendering of each page is kind of messed up! click on experience then contact, contact form will stop working :(
    console.log("show contact", showContactForm)
    return(
        <body className="text-center">
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" style={{paddingLeft: '1rem'}}>Home</span>
                <span className="navbar-brand" >Education</span>
                <span className="navbar-brand" onClick={(e) => experiencesOnClick(e)}>Experiences</span>
                <span className="navbar-brand" >Skills</span>
                <span className="navbar-brand" onClick={(e) => contactOnClick(e)}>Contact</span>
            </nav>
            {showContactForm ? <BodyComponent/> : null} 
            {showExperiences ? <Experiences/> : null} 
        </body>
    );
}

export default Header;