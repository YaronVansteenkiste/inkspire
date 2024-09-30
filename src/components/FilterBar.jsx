import React from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";

export function FilterBar() {
    return (
        <Row className="mb-3">
            <Col md={12}>
                <Form className="row">
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
                    <Form.Group className="mx-2 col-3 d-flex align-items-end">
                        <Button className="w-100" variant="primary" type="submit">
                            Filter
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}