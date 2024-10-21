import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import {SearchBar} from "./SearchBar.jsx";


function Header(props) {
    const {images} = props;
    const suggestions = images.map(image => image.title);
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
                   <SearchBar suggestions={suggestions}/>
                    <Nav className="d-block d-lg-flex ">
                        <Nav.Link href="#register"
                                  className="bg-secondary text-light rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Register</Nav.Link>
                        <Nav.Link href="/login"
                                  className="bg-primary text-dark rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;
