import { handleCollabUpload } from "../services/imageUploadService";
import { useAlertContext } from '../context/AlertContext.jsx';
import { Button, ButtonGroup, Form, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

function CollabToolbar(props) {
    const {
        color, brushSize,
        handleClearCanvas, handleColorChange, handleBrushSizeChange, handleSaveCanvas
    } = props;

    return (
        <ButtonGroup className="my-3">
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
    const { collab } = props;
    const [color, setColor] = useState("red");
    const [brushSize, setBrushSize] = useState(4);
    const canvasRef = useRef(null);
    const { setMessage } = useAlertContext();

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
            const drawingPaths = await canvasRef.current.exportPaths();
            const fileName = `${collab.id}_collaboration_paths.json`;
            await handleCollabUpload(drawingPaths, collab.title, "Collaboration Description", fileName, collab.id);
            setMessage("Canvas saved successfully!");
        } catch (error) {
            console.error("Error exporting canvas:", error);
            setMessage("Error saving canvas.");
        }
    };

    useEffect(() => {
        const loadPathsFromUrl = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const paths = await response.json();
                if (canvasRef.current) {
                    canvasRef.current.loadPaths(paths);
                }
            } catch (error) {
                console.error("Error loading paths from URL:", error);
                setMessage(`Error loading canvas paths: ${error.message}`);
            }
        };

        if (collab.pathsUrl && canvasRef.current) {
            loadPathsFromUrl(collab.pathsUrl);
        }
    }, [collab, setMessage]);

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