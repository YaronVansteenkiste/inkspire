// src/components/Collablist.jsx
import React from 'react';
import { Card, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCollabContext } from '../context/CollabFromDbContext.jsx';

export function Collablist({ items, itemType }) {
    const { loading } = useCollabContext();

    if (loading) {
        return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
    }

    return (
        <Row className="g-3">
            {items.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100 shadow-sm bg-primary">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <div className="mt-auto">
                                <Button as={Link} to={`/${itemType}/${item.id}`} variant="secondary">
                                    Join
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}