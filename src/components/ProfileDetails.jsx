import React from 'react';

export function ProfileDetails({ userData }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">About {userData.username}</h5>
                <p className="card-text"><strong>Username:</strong> {userData.username}</p>
                <p className="card-text"><strong>Email:</strong> {userData.email}</p>
                <p className="card-text"><strong>Bio:</strong> User bio goes here.</p>
                <p className="card-text"><strong>Location:</strong> User location here</p>
            </div>
        </div>
    );
}
