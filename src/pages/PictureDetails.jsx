import React from "react";
import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';

export function PictureDetails(props) {
    const { id } = useParams();
    const {images} = props;
    const image = images[id-1];

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <h1 className="text-center">{image.title}</h1>
                    <p className="text-center">published on {image.publishDate}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <img src={image.url} alt={image.title} className="img-fluid rounded mx-auto d-block" style={{ borderRadius: '20px' }} />
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-4">
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title className="text-center">Author: {image.author} </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="text-center">{image.description}</Card.Text>
                            <div className="d-flex justify-content-center">
                                <Button variant="outline-success" size="sm" className="me-4">👍</Button>
                                <Button variant="outline-danger" size="sm">👎</Button>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Title className="text-center">Comments</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Add a comment..." />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}