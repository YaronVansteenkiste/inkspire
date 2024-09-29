import React from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import PostCard from "./PostCard.jsx";

function TrendingCarousel(props) {
    const { trendingData } = props;

    return (
        <Carousel interval={5000}>
            {trendingData.map((img) => (
                <Carousel.Item key={img.id}>
                    <PostCard post={img} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default function Trending(props) {
    const { trendingData } = props;
    const trendingDataSliced = trendingData.slice(0, 4);

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h1>Check out what's trending today!</h1>
                </Col>
                <Col xs={7} md={4}>
                    <TrendingCarousel trendingData={trendingDataSliced} />
                </Col>
            </Row>
        </Container>
    );
}