import React, {useRef, useState, useEffect} from "react";
import {ReactSketchCanvas} from 'react-sketch-canvas';
import {Button, ButtonGroup, Col, Form} from 'react-bootstrap';
import {handleCollabUpload} from "../services/imageUploadService";

function CollabToolbar(props) {
    const {
        color, brushSize, backgroundColor,
        handleClearCanvas, handleColorChange, handleBrushSizeChange,
        handleBackgroundColorChange, handleDownloadCanvas, handleSaveCanvas
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
            <Form.Control
                type="color"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
                className="ms-2"
            />
            <Button variant="primary" className="ms-2" onClick={handleDownloadCanvas}>Download</Button>
            <Button variant="success" className="ms-2" onClick={handleSaveCanvas}>Save</Button>
        </ButtonGroup>
    );
}

export const CollabPanel = (props) => {
    const {collab} = props;
    const image = collab.url;
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
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const canvasElement = canvasRef.current._canvas.current;
        const img = new Image();
        img.src = image;

        img.onload = async () => {
            canvas.width = canvasElement.width;
            canvas.height = canvasElement.height;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(canvasElement, 0, 0);

            const dataUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "collaboration.png";
            link.click();
        };
    };

    const handleSaveCanvas = async () => {
        const dataUrl = await canvasRef.current.exportImage("png");
        const blob = dataURLToBlob(dataUrl);
        const fileName = "collaboration.png";
        await handleCollabUpload(blob, "Collaboration Title", "Collaboration Description");
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
                handleSaveCanvas={handleSaveCanvas}
            />
            <ReactSketchCanvas
                ref={canvasRef}
                width='100%'
                height='500px'
                strokeWidth={brushSize}
                strokeColor={color}
                canvasColor={backgroundColor}
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
    return new Blob([ab], { type: mimeString });
}