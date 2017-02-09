import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <div className="text-center">
                <h1> Welcome to Project Music Library </h1>
                <h3> You can sign in to create your very own special playlist for free </h3>
            </div>
        );
    }
}