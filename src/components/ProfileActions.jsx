import React from 'react';
import { useAuthContext } from '../context/AuthContext.jsx';

export function ProfileActions() {
    const { logout } = useAuthContext();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="card">
            <div className="card-body">
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </div>
        </div>
    );
}