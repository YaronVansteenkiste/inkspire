import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.js";
import { useUserContext } from '../context/UserFromDbContext';

export function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { addUser } = useUserContext();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.username) validationErrors.username = 'Username is required.';
        if (!formData.email.includes('@')) validationErrors.email = 'Invalid email format.';
        if (formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters.';
        if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match.';

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                const user = userCredential.user;

                await addUser({
                    uid: user.uid,
                    username: formData.username,
                    email: formData.email
                });

                setSuccessMessage('Registration successful! You can now log in.');
                setErrorMessage('');
            } catch (error) {
                setErrorMessage(error.message);
                setSuccessMessage('');
            }
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </form>
        </div>
    );
}