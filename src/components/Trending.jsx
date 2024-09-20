import React from "react";
import '../data/data.js'
import PostCard from "./PostCard.jsx";
import {POST_DATA} from "../data/data.js";

import {Container, Row} from 'react-bootstrap';

function Trending() {
    return (
        <div>
            <h1>Trending</h1>
            <Container>
                <Row>
                    {POST_DATA.map(img => (
                        <PostCard post={img}/>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Trending;