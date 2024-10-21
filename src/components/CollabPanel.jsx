import React, {useRef, useState} from "react";
import {ReactSketchCanvas} from 'react-sketch-canvas';
import {Button, ButtonGroup, Col, Form} from 'react-bootstrap';

function CollabToolbar(props) {
    const {color, brushSize, backgroundColor,
        handleClearCanvas, handleColorChange, handleBrushSizeChange,
        handleBackgroundColorChange, handleDownloadCanvas } = props;

    return (
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
            <Button variant="primary" className="ms-2" onClick={handleDownloadCanvas}>Download</Button>
        </ButtonGroup>
    );
}

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

    const handleDownloadCanvas = async () => {
        const dataUrl = await canvasRef.current.exportImage("png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "collaboration.png";
        link.click();
    };

    return (
        <Col s={12}>
            <CollabToolbar
                color={color}
                brushSize={brushSize}
                backgroundColor={backgroundColor}
                handleClearCanvas={handleClearCanvas}
                handleColorChange={handleColorChange}
                handleBrushSizeChange={handleBrushSizeChange}
                handleBackgroundColorChange={handleBackgroundColorChange}
                handleDownloadCanvas={handleDownloadCanvas}
            />
            <ReactSketchCanvas
                ref={canvasRef}
                width='100%'
                height='500px'
                strokeWidth={brushSize}
                strokeColor={color}
                canvasColor={backgroundColor}
            />

        </Col>
    );
};