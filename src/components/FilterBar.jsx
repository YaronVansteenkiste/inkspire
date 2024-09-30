import React, {useState} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";

export function FilterBar(props) {
    const { onFilterChange } = props;
    const [sortBy, setSortBy] = useState("Newest");

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        onFilterChange({ sortBy });
    };

    return (
        <Row className="mb-3">
            <Col md={12}>
                <Form className="row" onSubmit={handleFilterSubmit}>
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
                        <FormControl as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option>Most Popular</option>
                            <option>Newest</option>
                            <option>Oldest</option>
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