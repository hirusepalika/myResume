import React from 'react';
import {Form, Button} from 'react-bootstrap';

// .centered {
//     height: 100vh; /* Magic here */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

const BodyComponent = () => {
    return (
        <div style={{backgroundColor: '#333', position: 'absolute', width: '100%', height: '100%', boxShadow: 'inset 0 0 5rem rgb(0 0 0 / 50%)'}}>
            {/* <div style={{backgroundColor: 'darkslategray', height: '700px', width: '700px', display: 'flex', justifyContent: 'center', marginLeft: '20%', marginTop: '5%', paddingLeft: '25px'}}> */}
                <form style={{paddingTop: '100px'}}>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label" style={{color: 'white'}}>Email</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail" value="janeDoe@example.com" style={{width: '50%'}}/>
                        </div>
                    </div>
                    <br/>
                    <div class="form-group row">
                        <label for="textArea" class="col-sm-2 col-form-label" style={{color: 'white'}}>Message me!</label>
                        <div class="col-sm-10"> 
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{width: '50%'}}></textarea>
                        </div>
                    </div>
                </form>
            {/* </div> */}
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems : 'center'}}>
                        <Form.Control type="email" placeholder="Enter email" />
                    </div>
                   
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            
        </div>
    );
};

export default BodyComponent;