import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            responseText: ''
        };
    }
    render() {
        return (
            <div className="text-center">
                <Button bsStyle="primary" onClick={this.buttonClick.bind(this)}> Test</Button>
                <h1 ref="text">{this.state.responseText}</h1>
                <h1> Welcome to Project Music Library </h1>
                <h3> You can sign in to create your very own special playlist for free </h3>
            </div>
        );
    }

    buttonClick() {
        fetch("http://localhost:5000/home").then((response) => response.json()).then((data) => {
            this.setState({responseText: data});
        });
    }
}