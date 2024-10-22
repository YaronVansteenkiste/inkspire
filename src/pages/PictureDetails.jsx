import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Figure, Form, Row } from 'react-bootstrap';
import { useImageContext } from "../context/ImageFromDbContext.jsx";

export function PictureDetails() {
    const { id } = useParams();
    const { images } = useImageContext();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundImage = images.find(image => image.id === id);
        if (foundImage) {
            setImage(foundImage);
        }
        setLoading(false);
    }, [id, images]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!image) {
        return <h1>Image not found</h1>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <h1 className="text-center">{image.title}</h1>
                    <p className="text-center">published on {image.publishDate}</p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={6} className="d-flex justify-content-center">
                    <Figure>
                        <Figure.Image
                            width={300}
                            alt={image.title}
                            src={image.url}
                        />
                    </Figure>
                </Col>
                <Col md={6}>
                    <Card className="h-100">
                        <Card.Header>
                            <Card.Title className="text-center">Author: {image.author}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{image.description}</Card.Text>
                            <div className="d-flex justify-content-center">
                                <Button variant="outline-secondary" size="sm" className="me-4">❤️</Button>
                                <h4>{image.likes}</h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-4">
                <Col md={12}>
                    <Card>
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
    );
}
