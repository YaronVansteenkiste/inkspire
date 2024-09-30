import React from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import PostCard from "../components/PostCard.jsx";


export function SearchResultsPage(props) {
    const {searchQuery} = useParams();
    const {images} = props;

    const filteredImages = images.filter(image => image.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <Container>
            <h1>Search Results for {searchQuery}</h1>
            <Row>
                {filteredImages.map((img) => (
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={img.id}>
                        <PostCard post={img}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}