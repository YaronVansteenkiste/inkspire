import * as React from 'react';
import {CollabPanel} from "../components/CollabPanel.jsx";
import {Row} from "react-bootstrap";


export const CollabPage = () => {
    return (
        <Row className="g-2">
            <h1>Collab</h1>
            <CollabPanel />
            <CollabPanel />
            <CollabPanel />
            <CollabPanel />
        </Row>
    );
};
