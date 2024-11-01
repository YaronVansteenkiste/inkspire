import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { SearchBar } from "./SearchBar.jsx";
import { useImageContext } from "../context/ImageFromDbContext.jsx";
import { useUserContext } from "../context/UserFromDbContext.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";

function Header(props) {
    const { images } = useImageContext();
    const { currentUserData } = useUserContext();
    const { currentUser, logout } = useAuthContext();
    const suggestions = images.map(image => image.title);


    return (
        <Navbar expand="lg" className="navbar-dark border-bottom border-light-subtle">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to="/"><img src="/images/logo.png" alt="Logo"></img></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className="nav-link">Explore</NavLink>
                        <NavLink to="/collab" className="nav-link">Collab</NavLink>
                    </Nav>
                    <SearchBar suggestions={suggestions}/>
                    {currentUser && currentUserData ? (
                        <Nav className="d-block d-lg-flex">
                            <NavLink to="/upload"
                                     className="btn btn-secondary text-light rounded mx-2 mx-lg-1 mt-2 mt-lg-0">Upload</NavLink>
                            <NavLink to="/profile"
                                     className="btn btn-secondary text-light rounded mx-0 mx-lg-1 mt-2 mt-lg-0">{currentUserData.username}</NavLink>
                        </Nav>
                    ) : (
                        <Nav className="d-block d-lg-flex">
                            <NavLink to="/register"
                                     className="btn btn-secondary text-light rounded mx-2 mx-lg-1 mt-2 mt-lg-0">Register</NavLink>
                            <NavLink to="/login"
                                     className="btn btn-primary text-dark rounded mx-0 mx-lg-1 mt-2 mt-lg-0">Login</NavLink>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;