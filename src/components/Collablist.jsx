import React from 'react';
import {Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Collablist({ items, itemType }) {
    return (
        <Row className="g-2">
            {items.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src={item.url} style={{ width: '100%' }} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Link to={`/${itemType}/${item.id}`}>Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}