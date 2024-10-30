import React from "react";
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import PostCard from "./PostCard.jsx";

import {ReactTyped} from "react-typed";


export function TrendingCarousel(props) {
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

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Discover Today's{" "}</h3>
                    <h1 className="text-decoration-underline text-primary">Greatest <ReactTyped
                                    strings={[" Artworks!", " Masterpieces!", " Creations!", " Designs!"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop/>
                    </h1>
                </Col>
                <Col xs={7} md={4}>
                    <TrendingCarousel trendingData={trendingData} />
                </Col>
            </Row>
        </Container>
    );
}