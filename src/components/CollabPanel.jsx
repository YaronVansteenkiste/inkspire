import React, {useRef, useState, useEffect} from "react";
import {ReactSketchCanvas} from 'react-sketch-canvas';
import {Button, ButtonGroup, Col, Form} from 'react-bootstrap';
import {handleCollabUpload} from "../services/imageUploadService";

function CollabToolbar(props) {
    const {
        color, brushSize,
        handleClearCanvas, handleColorChange, handleBrushSizeChange, handleSaveCanvas
    } = props;

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
            <Button variant="success" className="ms-2" onClick={handleSaveCanvas}>Save</Button>
        </ButtonGroup>
    );
}

export const CollabPanel = (props) => {
    const {collab} = props;
    const image = collab.url;
    const [color, setColor] = useState("red");
    const [brushSize, setBrushSize] = useState(4);
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



    const handleSaveCanvas = async () => {
        if (!canvasRef.current) {
            console.error("Canvas reference is not available.");
            return;
        }

        const dataUrl = await canvasRef.current.exportImage("png");
        if (dataUrl) {
            const blob = dataURLToBlob(dataUrl);

            const fileName = `${collab.id}_collaboration.png`;

            await handleCollabUpload(blob, collab.title, "Collaboration Description", fileName, collab.id);
        } else {
            console.error("Failed to export image.");
        }
    };
    return (
        <Col s={12}>
            <CollabToolbar
                color={color}
                brushSize={brushSize}
                handleClearCanvas={handleClearCanvas}
                handleColorChange={handleColorChange}
                handleBrushSizeChange={handleBrushSizeChange}
                handleSaveCanvas={handleSaveCanvas}
            />
            <ReactSketchCanvas
                ref={canvasRef}
                width='100%'
                height='500px'
                strokeWidth={brushSize}
                strokeColor={color}
                backgroundImage={image}
            />
        </Col>
    );
};

function dataURLToBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
}