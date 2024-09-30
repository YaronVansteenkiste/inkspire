import * as React from 'react';
import {CollabPanel} from "../components/CollabPanel.jsx";
import {Button, Card, Row} from "react-bootstrap";


export const CollabPage = (props) => {
    const {collaborations} = props;
    return (
        <Row className="g-2">
            <h1>Collab</h1>
            {collaborations.map((collab, index) =>
                <Card key={index}>
                    <Card.Title>{collab.title}</Card.Title>
                    <Card.Body>
                        <a href={`/collab/${collab.id}`}> Details</a>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
};
