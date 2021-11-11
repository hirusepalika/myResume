import React, {useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import TextArea, {CommonInput} from './StyledBodyComponent';
import ScrollAnimation from 'react-animate-on-scroll'
import ContactForm from './ContactForm';

const BodyComponent = () => {

    const Animation = () => (
        <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation>
    )

    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);

      
    return (
        <div style={{backgroundColor: '#333', position: 'absolute', width: '100%', height: '100%', boxShadow: 'inset 0 0 5rem rgb(0 0 0 / 50%)'}}>
            {/* <div style={{backgroundColor: 'darkslategray', height: '700px', width: '700px', display: 'flex', justifyContent: 'center', marginLeft: '20%', marginTop: '5%', paddingLeft: '25px'}}> */}
            <ContactForm /> 
        </div>
    );
};

export default BodyComponent;