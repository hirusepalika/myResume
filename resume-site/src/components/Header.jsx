import React from 'react';
import BodyComponent from './BodyComponent';
import ContactForm from './ContactForm';

const Header = () => {

    return(
        <body className="text-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" style={{paddingLeft: '1rem'}}>Home</span>
                <span className="navbar-brand" >Education</span>
                <span className="navbar-brand" >Experiences</span>
                <span className="navbar-brand" >Skills</span>
                <ContactForm/>
            </nav>
            <BodyComponent/>
        </body>
       
    );
}

export default Header;