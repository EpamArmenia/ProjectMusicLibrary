import React, { Component } from 'react'

import {Form, Col, FormGroup, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap'

export default class SignIn extends Component {
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
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} smOffset={2} sm={2}>
                            Password
                        </Col>
                        <Col sm={4}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={4} sm={4}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={4} sm={4}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}