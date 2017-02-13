import React, { Component } from 'react'
import { Form, Col, FormGroup, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap'
import Notifications, {notify} from 'react-notify-toast';


export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        // this.show = notify.createShowQueue();
    }
    register() {
        var data = document.querySelector('Form');
        let myColor = { background: '#0E1717', text: "#FFFFFF" };

        fetch('http://localhost:5000/Account/Register', {
            method: 'POST',
            body: new FormData(data)
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.success) {
                    // Success
                    data.messages.forEach(function(msg) {
                        notify.show(msg, 'success');
                    }, this);
                    
                } else {
                    // Error
                    data.messages.forEach(function(msg) {
                        notify.show(msg, 'error');
                    }, this);
                }
            })
            .catch(data => {
                this.show('Internal Server Error', 'error');
            });
    }
    render () {
        return (
            <div className='register'>
                <Notifications />
                <Form horizontal>
                    <h4>Register</h4>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} smOffset={2} sm={2}>
                            Email
                        </Col>
                        <Col sm={4}>
                            <input type='text' placeholder='Email' name='Email' className='form-control' />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} smOffset={2} sm={2}>
                            Password
                        </Col>
                        <Col sm={4}>
                            <input type='password' placeholder='Password' name='Password' className='form-control' />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} smOffset={2} sm={2}>
                            Confirm Password
                        </Col>
                        <Col sm={4}>
                            <input type='password' placeholder='Password' name='ConfirmPassword' className='form-control' />
                        </Col>
                    </FormGroup>

                    <FormGroup className='form-group'>
                        <Col smOffset={4} sm={4}>
                            <Button onClick={this.register.bind(this)}>
                                Sign up
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}