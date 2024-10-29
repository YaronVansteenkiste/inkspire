import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleImageUpload } from '../services/imageUploadService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useAlertContext } from '../context/AlertContext.jsx';
import { useUserContext } from '../context/UserFromDbContext.jsx';
import Alert from '../components/Alert.jsx';

export function CreatePostPage() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const { setMessage } = useAlertContext();
    const { currentUserData } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUserData) {
            setAuthor(currentUserData.username);
        }
    }, [currentUserData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const postId = await handleImageUpload(file, title, author, description, category);
                setMessage("Image uploaded successfully!");
                navigate(`/posts/${postId}`);
            } catch (error) {
                setMessage("Error uploading image.");
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Upload an Image</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Choose Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter image title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter image description"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter image category"
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Upload</button>
                </div>
            </form>

            <Alert />
        </div>
    );
}