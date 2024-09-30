import React from "react";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";


export function SearchResultsPage(props) {
    const {searchResults} = useParams();
    return (
        <Container>
            <h1>Search Results for {searchResults}</h1>
        </Container>
    )
}