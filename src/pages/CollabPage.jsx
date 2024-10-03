import * as React from 'react';
import {Card, Row} from "react-bootstrap";
import {Link} from "react-router-dom"; // Import Link from react-router-dom

export const CollabPage = (props) => {
    const {collaborations} = props;
    return (
        <Row className="g-2">
            <h1>Collab</h1>
            {collaborations.map((collab, index) =>
                <Card key={index}>
                    <Card.Title>{collab.title}</Card.Title>
                    <Card.Body>
                        <Link to={`/collab/${collab.id}`}>Details</Link>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
};
