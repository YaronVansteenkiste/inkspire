import React from "react";
import '../data/data.js'
import PostCard from "./PostCard.jsx";
import {Container, Row} from 'react-bootstrap';

function Trending(props) {
    const {trendingData} = props;

    return (
        <div>
            <h1>Trending</h1>
            <Container>
                <Row>
                    {trendingData.map(img => (
                        <PostCard key={img.id} post={img}/>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Trending;