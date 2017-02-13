import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <p className='pull-left'>&copy; {new Date().getFullYear()} - Project Music Library</p>
            </div>
        );
    }
}