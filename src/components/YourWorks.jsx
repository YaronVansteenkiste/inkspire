import React from "react";

import {Container, Row} from 'react-bootstrap';

import PostCard from "./PostCard.jsx";

import {YOUR_WORKS_DATA} from "../data/data.js";

function YourWorks() {
    return (
        <div>
            <h2>Your Works</h2>
            <Container>
                <Row>
                    {YOUR_WORKS_DATA.map(img => (
                        <PostCard post={img}/>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default YourWorks;