import React, { useEffect, useState } from "react";
import { CollabPanel } from "../components/CollabPanel.jsx";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCollabContext } from "../context/CollabFromDbContext.jsx";

export function CollabDetails() {
    const { id } = useParams();
    const { collaborations } = useCollabContext();
    const [collab, setCollab] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundCollab = collaborations.find(collaboration => collaboration.id === id);
        if (foundCollab) {
            setCollab(foundCollab);
        }
        setLoading(false);
    }, [id, collaborations]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!collab) {
        return <h1>Collaboration not found</h1>;
    }

    return (
        <Container>
            <h1>{collab.title}</h1>
            <CollabPanel collab={collab} />
        </Container>
    );
}
