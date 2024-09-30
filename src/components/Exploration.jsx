import React from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import PostCard from "./PostCard.jsx";

function FilterBar() {
    return (
        <Row className="mb-3">
            <Col md={12}>
                <Form className="row align-items-end">
                    <Form.Group className="mx-2 col-4">
                        <Form.Label>Category</Form.Label>
                        <FormControl as="select">
                            <option>All</option>
                            <option>Nature</option>
                            <option>Animals</option>
                            <option>Travel</option>
                        </FormControl>
                    </Form.Group>
                    <Form.Group className="mx-2 col-4">
                        <Form.Label>Sort By</Form.Label>
                        <FormControl as="select">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Most Liked</option>
                        </FormControl>
                    </Form.Group>
                    <Button className="mx-2 col-3" variant="primary" type="submit">
                        Filter
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export function Exploration(props) {
    const { images } = props;
    const imagesRandomOrder = images.sort(() => Math.random() - 0.5);
    return (
        <div>
            <h1>Exploration</h1>
            <FilterBar />
            <Container>
                <Row>
                    {imagesRandomOrder.map((img) => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={img.id}>
                            <PostCard post={img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}