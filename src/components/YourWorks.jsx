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
            <div className="d-flex align-items-center mb-3">
                <h1 className="me-2">Your Works</h1>
                <NavLink className="btn btn-outline-primary me-2" to="/upload">Upload</NavLink>
                <Button variant="outline-primary" onClick={handleToggleShow}>
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