import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NaviBar() {
    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>React Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                    <Nav.Link><Link to="/newpost">NewPost</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="mr-2">Sign In</Button>
                    <Button variant="primary" className="mr-2">Sign Out</Button>
                    <Button variant="primary">Register</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>   
)}