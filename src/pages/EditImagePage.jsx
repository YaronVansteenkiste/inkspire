import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container, Spinner } from 'react-bootstrap';
import { useImageContext } from "../context/ImageFromDbContext.jsx";
import { useUserContext } from "../context/UserFromDbContext.jsx";

export function EditImagePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { images, updateImage, removeImage } = useImageContext();
    const { currentUserData } = useUserContext();

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [newImageFile, setNewImageFile] = useState(null);

    useEffect(() => {
        const foundImage = images.find(image => image.id === id);
        if (foundImage) {
            setImage(foundImage);
            setTitle(foundImage.title);
            setDescription(foundImage.description);
            setCategory(foundImage.category);
        }
        setLoading(false);
    }, [id, images]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (image) {
            let updatedImage = { ...image, title, description, category };

            if (newImageFile) {
                const imageRef = ref(storage, `images/${id}`);
                await uploadBytes(imageRef, newImageFile);
                const imageUrl = await getDownloadURL(imageRef);
                updatedImage = { ...updatedImage, url: imageUrl };
            }

            await updateImage(updatedImage);
            navigate(`/post/${id}`);
        }
    };

    const handleRemove = async () => {
        if (image) {
            await removeImage(image);
            navigate('/');
        }
    };

    if (loading) {
        return <Spinner animation="border" className="d-block mx-auto" />;
    }

    if (!image) {
        return <h1 className="text-center mt-5">Image not found</h1>;
    }

    if (image.authorId !== currentUserData?.id) {
        return <h1 className="text-center mt-5">You are not authorized to edit this image</h1>;
    }

    return (
        <Container>
            <h1>Edit Image</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formDescription" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formCategory" className="mt-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formImage" className="mt-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => setNewImageFile(e.target.files[0])}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Save Changes
                </Button>
                <Button variant="danger" onClick={handleRemove} className="mt-3 ms-3">
                    Remove Image
                </Button>
            </Form>
        </Container>
    );
}