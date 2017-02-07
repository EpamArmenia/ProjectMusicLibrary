import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <div id="content" className="container-fluid">
                    {this.props.children}
                </div>
                <hr/>
                <Footer />
            </div>
        );
    }
}