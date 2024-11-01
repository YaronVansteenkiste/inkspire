import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../services/firebase.js";
import {Navigate} from 'react-router-dom';

export function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.email.includes('@')) validationErrors.email = 'Invalid email format.';
        if (formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters.';

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            try {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                setError('');
                setSuccessMessage('Login successful!');
                setRedirect(true);
            } catch (error) {
                setError(error.message);
                setSuccessMessage('');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container mt-5">
            {redirect && <Navigate to="/" />}
            <h1 className="text-center mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
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
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </form>
        </div>
    );
}