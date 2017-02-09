import React, { Component } from 'react'

import { Form, Col, FormGroup, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap'

export default class SignIn extends Component {

    signIn() {
        var data = document.querySelector('Form');

        fetch('http://localhost:5000/Account/Login', {
            method: 'POST',
            body: new FormData(data)
        })
            .then(response => {
                debugger;
                return response.json()
            })
            .then(data => {
                debugger;
                console.log(data)
            })
            .catch(data => {
                debugger;
            });
    }

    render() {
        return (
            <div className='container'>
                <Form horizontal>
                    <h4>Sign In</h4>
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

                    <FormGroup className='checkbox'>
                        <Col smOffset={4} sm={4}>
                            <label>
                                <input type="checkbox" name='RememberMe' />
                                Remember Me
                            </label>
                        </Col>
                    </FormGroup>

                    <FormGroup className='form-group'>
                        <Col smOffset={4} sm={4}>
                            <Button onClick={this.signIn.bind(this)}>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}