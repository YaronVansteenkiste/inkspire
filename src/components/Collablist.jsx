import React from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Collablist({ items, itemType }) {
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
