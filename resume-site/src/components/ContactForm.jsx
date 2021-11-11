import React, {useRef, useState} from 'react';
import TextArea, {CommonInput} from './StyledBodyComponent';
import { Form, Col, Button } from "react-bootstrap";
import emailjs from 'emailjs-com'

const ContactForm = () => {
    //  const form = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        let templateParams = {
            firstName: firstName,
            lastName: lastName,
            fromEmail: emailAddress,
            message: message,
        }

        emailjs.send(
            'gmailServ1',
            'template_wu6s1yh',
             templateParams,
            'user_SJzIbARqtzB7eVx15xylC'
        )

        resetForm();
    }

    // reset all the fields in contact form
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmailAddress('');
        setMessage('');
    }

    return (
        <>
            <Form style={{paddingTop: '100px'}}>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{color: 'white'}}>First Name</label>
                    <div className="col-sm-10">
                        <CommonInput className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Jane" name="firstName" onChange={e => setFirstName(e.target.value)} value={firstName}></CommonInput>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{color: 'white'}}>Last Name</label>
                    <div className="col-sm-10">
                        <CommonInput className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Doe" name="lastName" onChange={e => setLastName(e.target.value)} value={lastName}></CommonInput>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{color: 'white'}}>Email</label>
                    <div className="col-sm-10">
                        <CommonInput className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="janeDoe@example.com" name="emailAddress" onChange={e => setEmailAddress(e.target.value)} value={emailAddress}></CommonInput>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label for="textArea" className="col-sm-2 col-form-label" style={{color: 'white'}}>Message me!</label>
                    <div className="col-sm-10"> 
                        <TextArea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={e => setMessage(e.target.value)} value={message}></TextArea>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    {/* <div className="col-sm-10">  */}
                        <input className="col-sm-2 btn btn-primary" type="submit" value="Send Email" rows="3" style={{marginLeft: '42%'}} onClick={(e) => sendEmail(e)}/>
                    {/* </div> */}
                </div>
            </Form>  
            <br/>
            {/* <div className="form-group row">
                <label for="textArea" className="col-sm-2 col-form-label" style={{color: 'white', fontSize: 25}}>Social Links</label>
            </div>
            <br/>
            <div>
               <div
                 class="badge-base LI-profile-badge"
                 data-locale="en_US"
                 data-size="medium"
                 data-theme="dark"
                 data-type="VERTICAL"
                 data-vanity="hiruf"
                 data-version="v1"
               >
                    <a
                    class="badge-base__link LI-simple-link"
                    href="https://au.linkedin.com/in/hiruf?trk=profile-badge"
                    />
               </div>
            </div>  */}
            <br/> 
        </>
    );
};

export default ContactForm;