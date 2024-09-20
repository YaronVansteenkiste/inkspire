import React from "react";
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark border-bottom border-light-subtle">
            <Container fluid>
                <Navbar.Brand href="#">Inkspire</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Explore</Nav.Link>
                        <Nav.Link href="#action2">Collab</Nav.Link>
                    </Nav>
                    <Form className="d-flex mx-auto w-100 w-lg-50">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="d-block d-lg-flex ">
                        <Nav.Link href="#register" className="bg-secondary rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Register</Nav.Link>
                        <Nav.Link href="#login" className="bg-primary text-dark rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;