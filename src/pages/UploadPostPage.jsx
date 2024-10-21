import React, { useState } from 'react';
import { handleImageUpload } from '../services/imageUploadService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function UploadPostPage() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            await handleImageUpload(file, title, author, description, category);
            setShowToast(true);
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
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter author name"
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

            <div
                className={`toast m-3 position-fixed bottom-0 end-0 p-3 ${showToast ? 'show' : 'hide'}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-bs-autohide="true"
                data-bs-delay="3000"
                onAnimationEnd={() => setShowToast(false)}
            >
                <div className="toast-header">
                    <strong className="me-auto">Upload Status</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body bg-secondary">
                    Image uploaded successfully!
                </div>
            </div>
        </div>
    );
}