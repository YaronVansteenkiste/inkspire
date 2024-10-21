import React from "react";
import { Container } from "react-bootstrap";
import { UploadImage } from "../components/UploadImage.jsx";



export function UploadPage() {
    return (
        <Container className="mt-5">
            <h1>Upload Image</h1>
            <UploadImage />
        </Container>
    );
}