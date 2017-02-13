import React, { Component } from 'react'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class TopNavigation extends Component {
    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Music Library</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <NavItem eventKey={2}>About</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Hip Hop/Rap</MenuItem>
                            <MenuItem eventKey={3.2}>Classic</MenuItem>
                            <MenuItem eventKey={3.3}>Soundtrack</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Christmas Songs</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/signin">
                            <NavItem eventKey={1}>Sign In</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Form >
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Submit</Button>



                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}