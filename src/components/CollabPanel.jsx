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

        try {
            // Export the current drawing paths
            const drawingPaths = await canvasRef.current.exportPaths();
            console.log("Exported drawing paths:", drawingPaths);

            if (drawingPaths.length === 0) {
                console.warn("No drawing paths found.");
                return;
            }

            // Proceed to upload the drawing paths
            const fileName = `${collab.id}_collaboration_paths.json`;
            await handleCollabUpload(drawingPaths, collab.title, "Collaboration Description", fileName, collab.id);
        } catch (error) {
            console.error("Error exporting canvas:", error);
        }
    };

    useEffect(() => {
        if (collab.paths && canvasRef.current) {
            canvasRef.current.loadPaths(collab.paths);
        }
    }, [collab]);

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
                allowOnlyPointerType="all"
            />
        </Col>
    );
};