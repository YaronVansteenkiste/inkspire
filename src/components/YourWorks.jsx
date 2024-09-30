import React from "react";
import {Button, Container, Row} from 'react-bootstrap';
import PostCard from "./PostCard.jsx";

function YourWorks(props) {
    const [show, setShow] = React.useState(false);
    const { yourWorksData } = props;

    return (
        <div>
            <div >
                <h1 className="d-inline me-2">Your Works</h1>
                <Button className="d-inline" variant="outline-primary" className="mb-3" onClick={() => setShow(!show)}>
                    {show ? "Close" : "Open"}
                </Button>
            </div>
            {show && (
                <Container>
                    <Row>
                        {yourWorksData.map(img => (
                            <PostCard key={img.id} post={img} />
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default YourWorks;