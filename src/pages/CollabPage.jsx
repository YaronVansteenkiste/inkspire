import * as React from 'react';
import {Card, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useCollabContext} from "../context/CollabFromDbContext.jsx";
import {GridLayout} from "../components/GridLayout.jsx";

export function CollabPage ()  {
    const {collaborations} = useCollabContext();
    return (
        <Row className="g-2">
            <h1>Collab</h1>
            <GridLayout items={collaborations} itemType="collab" />
        </Row>
    );
};
