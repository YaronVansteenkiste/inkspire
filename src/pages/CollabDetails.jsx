import React from "react";
import {CollabPanel} from "../components/CollabPanel.jsx";
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useCollabContext} from "../context/CollabFromDbContext.jsx";


export function CollabDetails() {
    const {id} = useParams();
    const {collaborations} = useCollabContext();

    const collab = collaborations.find(collaboration => collaboration.id === (id));

    return (
        <Container>
            <h1>{collab.title}</h1>
            <CollabPanel collab={collab}/>
        </Container>
    )
}