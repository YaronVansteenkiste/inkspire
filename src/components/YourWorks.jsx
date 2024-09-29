import React from "react";

import {Container, Row} from 'react-bootstrap';

import PostCard from "./PostCard.jsx";

function YourWorks(props) {
    const {yourWorksData} = props;
    console.log(yourWorksData);

    return (
        <div>
            <h2>Your Works</h2>
            <Container>
                <Row>
                    {yourWorksData.map(img => (
                        <PostCard key={img.id} post={img}/>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default YourWorks;