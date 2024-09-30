import React, { useState, useRef } from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Col, Button, ButtonGroup, Form } from 'react-bootstrap';

export const CollabPanel = () => {
    const [color, setColor] = useState("red");
    const [brushSize, setBrushSize] = useState(4);
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const canvasRef = useRef(null);

    const handleClearCanvas = () => {
        canvasRef.current.clearCanvas();
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleBrushSizeChange = (e) => {
        setBrushSize(parseInt(e.target.value, 10));
    };

    const handleBackgroundColorChange = (e) => {
        setBackgroundColor(e.target.value);
        canvasRef.current.eraseMode(false);
        canvasRef.current.fillCanvas(e.target.value);
    };

    return (
        <Col s={12}>
            <ReactSketchCanvas
                ref={canvasRef}
                width='100%'
                height='500px'
                strokeWidth={brushSize}
                strokeColor={color}
                canvasColor={backgroundColor}
            />
            <ButtonGroup className="mt-3">
                <Button variant="danger" onClick={handleClearCanvas}>Clear Canvas</Button>
                <Form.Control
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="ms-2"
                />
                <Form.Control
                    type="number"
                    value={brushSize}
                    onChange={handleBrushSizeChange}
                    className="ms-2"
                    min="1"
                    max="20"
                />
                <Form.Control
                    type="color"
                    value={backgroundColor}
                    onChange={handleBackgroundColorChange}
                    className="ms-2"
                />
            </ButtonGroup>
        </Col>
    );
};