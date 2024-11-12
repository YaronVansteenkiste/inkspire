import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {ReactTyped} from "react-typed";
import { FaTools } from 'react-icons/fa';

export function NoConnectionPage() {
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 text-center">
            <Row>
                <Col>
                    <FaTools size={50} className="text-warning mb-3" />
                    <h1 className="display-4">Hey There!</h1>
                    <ReactTyped
                        strings={[
                            "We're working on some amazing upgrades!",
                            "Please bear with us...",
                            "We'll be back soon!",
                        ]}
                        typeSpeed={40}
                        backSpeed={20}
                        loop
                        className="d-block text-muted mt-2"
                    />
                    <p className="mt-4 lead text-muted">
                        Our page is currently undergoing some database improvements to serve you better.
                    </p>
                    <Button variant="primary" className="mt-3">
                        Check Back Soon
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
