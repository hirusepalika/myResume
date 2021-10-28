import React from 'react';

const ContactForm = () => {

    const onClick = (e) => {
        console.log("Clicked on contact")
    }
    return (
        <span className="navbar-brand" onClick={(e) => onClick(e)}>Contact</span>
    )
};

export default ContactForm;