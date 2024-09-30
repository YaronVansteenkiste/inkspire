import React from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import PostCard from "./PostCard.jsx";

import { ReactTyped } from "react-typed";



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
    const trendingDataRandomized = trendingData.sort(() => Math.random() - 0.5);
    const trendingDataSliced = trendingDataRandomized.slice(0, 4);

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Discover Today's{" "}</h3>
                    <h1><ReactTyped className="text-decoration-underline text-primary" strings={["Greatest Artworks!"]}
                                    typeSpeed={100} loop/>
                    </h1>
                </Col>
                <Col xs={7} md={4}>
                    <TrendingCarousel trendingData={trendingDataSliced} />
                </Col>
            </Row>
        </Container>
    );
}