import React from "react";
import {ReactSketchCanvas} from 'react-sketch-canvas';
import {Col} from 'react-bootstrap';

export const CollabPanel = () => {
    return (
        <Col s={12} md={4}>
            <ReactSketchCanvas
                width="20"
                height="400"
                strokeWidth={4}
                strokeColor="red"
            />
        </Col>

    )
}