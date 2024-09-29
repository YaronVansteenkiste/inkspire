import React from "react";

import {Button, Container, Row} from 'react-bootstrap';

import PostCard from "./PostCard.jsx";

function YourWorks(props) {
    const {yourWorksData} = props;
    const yourWorksDataSliced = yourWorksData.slice(0, 4);

    return (
        <div>
            <div className={"d-flex justify-content-between"}>
                <h1>Your Works</h1>
                <Button variant="outline-primary" className="mb-3">View all </Button>
            </div>
            <Container>
                <Row>
                    {yourWorksDataSliced.map(img => (
                        <PostCard key={img.id} post={img}/>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default YourWorks;