import React from "react";
import { useParams } from "react-router-dom";

export function PictureDetails(props) {
    const { id } = useParams();

    return (
        <div>
            <h1>Picture Details</h1>
            <p>Picture ID: {id}</p>
        </div>
    )
}