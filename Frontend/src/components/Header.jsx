import React, { Component } from 'react'

import TopNavigation from './NavigationComponent'



export default class Header extends Component {

    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    }

    render() {
        return (
            <div className="header">
                <TopNavigation/>
            </div>
        );
    }
}