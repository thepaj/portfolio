import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="navbar-top">
                    <Navbar.Brand className="navbar-brand" as={Link} to="/">Pavla Jureckova</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;