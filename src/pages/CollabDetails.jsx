import React from "react";
import {CollabPanel} from "../components/CollabPanel.jsx";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";


export function CollabDetails(props) {
    const {id} = useParams();
    const {collaborations} = props;

    const collab = collaborations.find(collab => {
        return collab.id === parseInt(id)
    })

    return (
        <Container>
            <h1>{collab.title}</h1>
            <CollabPanel />
        </Container>
    )
}