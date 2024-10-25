import React from 'react';

function Comment({ author, text, timestamp }) {
    return (
        <div className="comment">
            <p><strong>{author}</strong> {new Date(timestamp).toLocaleString()}</p>
            <p>{text}</p>
        </div>
    );
}

export default Comment;