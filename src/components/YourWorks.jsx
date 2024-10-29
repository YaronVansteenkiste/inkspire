import React, { useEffect } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import PostCard from "./PostCard.jsx";
import { NavLink } from "react-router-dom";

function YourWorks(props) {
    const [show, setShow] = React.useState(false);
    const { yourWorksData } = props;

    useEffect(() => {
        const savedShowState = localStorage.getItem('yourWorksShowState');
        if (savedShowState !== null) {
            setShow(JSON.parse(savedShowState));
        }
    }, []);

    const handleToggleShow = () => {
        const newShowState = !show;
        setShow(newShowState);
        localStorage.setItem('yourWorksShowState', JSON.stringify(newShowState));
    };

    return (
        <div>
            <div>
                <h1 className="d-inline me-2">Your Works</h1>
                <NavLink className="btn btn-outline-primary align-top mt-2 me-2" to="/upload">Upload</NavLink>
                <Button className="d-inline mb-3" variant="outline-primary" onClick={handleToggleShow}>
                    {show ? "Close" : "Open"}
                </Button>
            </div>
            {show && (
                <Container>
                    <Row>
                        {yourWorksData.map(img => (
                            <Col key={img.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <PostCard post={img} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default YourWorks;