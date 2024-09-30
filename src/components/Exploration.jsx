import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PostCard from "./PostCard.jsx";
import {FilterBar} from "./FilterBar.jsx";


export function Exploration(props) {
    const {images, onFilterChange} = props;

    return (
        <div>
            <h1>Exploration</h1>
            <FilterBar onFilterChange={onFilterChange}/>
            <Container>
                <Row>
                    {images.map((img) => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={img.id}>
                            <PostCard post={img}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}