import React, { useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

export function FilterBar(props) {
    const { onFilterChange } = props;
    const [sortBy, setSortBy] = useState("None");
    const [category, setCategory] = useState("All");

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        onFilterChange({ sortBy, category });
    };

    return (
        <Row className="mb-3">
            <Col md={12}>
                <Form className="row" onSubmit={handleFilterSubmit}>
                    <Form.Group className="mx-2 col-12 col-md-4">
                        <Form.Label>Category</Form.Label>
                        <FormControl as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>All</option>
                            <option value="Charcoal">Charcoal</option>
                            <option value="Oil Painting">Oil Painting</option>
                            <option value="Watercolor">Watercolor</option>
                            <option value="Acrylic">Acrylic</option>
                            <option value="Digital Art">Digital Art</option>
                            <option value="Pencil">Pencil</option>
                        </FormControl>
                    </Form.Group>
                    <Form.Group className="mx-2 col-12 col-md-4">
                        <Form.Label>Sort By</Form.Label>
                        <FormControl as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option>None</option>
                            <option>Most Popular</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </FormControl>
                    </Form.Group>
                    <Form.Group className="mx-2 mt-sm-4 col-12 col-md-3 d-flex align-items-end">
                        <Button className="w-100" variant="primary" type="submit">
                            Filter
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}