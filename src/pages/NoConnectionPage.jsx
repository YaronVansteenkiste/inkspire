import React from 'react';
import { Container } from 'react-bootstrap';

export function NoConnectionPage() {
    return (
        <Container>
            <h1>No Connection</h1>
            <p>It seems there is no connection to the database. Please try again later.</p>
        </Container>
    );
}