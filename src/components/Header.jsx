import React from "react";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" className="navbar-dark border-bottom border-light-subtle">
            <Container fluid>
                <Navbar.Brand href="/"><img src="/images/logo.png"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink to="/"  className="nav-link">Explore</NavLink>
                        <NavLink to="/collab" className="nav-link">Collab</NavLink>
                    </Nav>
                    <Form className="d-flex mx-auto w-100 px-0 px-lg-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="d-block d-lg-flex ">
                        <Nav.Link href="#register"
                                  className="bg-secondary text-light rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Register</Nav.Link>
                        <Nav.Link href="#login"
                                  className="bg-primary text-dark rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;
