import React from "react";
import {Button, Container, Row} from 'react-bootstrap';
import PostCard from "./PostCard.jsx";
import {NavLink} from "react-router-dom";

function YourWorks(props) {
    const [show, setShow] = React.useState(false);
    const {yourWorksData} = props;

    return (
        <div>
            <div>
                <h1 className="d-inline me-2">Your Works</h1>
                <NavLink className="btn btn-outline-primary align-top mt-2 me-2" to="/upload">Upload</NavLink>
                <Button className="d-inline mb-3" variant="outline-primary" onClick={() => setShow(!show)}>
                    {show ? "Close" : "Open"}
                </Button>
            </div>
            {show && (
                <Container>
                    <Row>
                        {yourWorksData.map(img => (
                            <PostCard key={img.id} post={img}/>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default YourWorks;