import * as React from 'react';
import {Button, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useCollabContext} from "../context/CollabFromDbContext.jsx";
import {Collablist} from "../components/Collablist.jsx";

export function CollabPage ()  {
    const {collaborations} = useCollabContext();
    return (
        <Row className="g-2">
            <h1>Collab</h1>
            <div>
                <Button as={Link} to="/create-collab" variant="primary" className="mb-3">
                    Create Collab
                </Button>
            </div>
            <Collablist items={collaborations} itemType="collab" />
        </Row>
    );
}