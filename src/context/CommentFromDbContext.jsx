import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, addDoc } from 'firebase/firestore';
import { firestoreDB } from '../services/firebase.js';
import { useUserContext } from './UserFromDbContext';

const CommentContext = createContext();

const commentConverter = {
    toFirestore: function (comment) {
        return {
            imageId: comment.imageId,
            author: comment.author,
            text: comment.text,
            timestamp: comment.timestamp
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data();
        const id = snapshot.id;
        return { ...data, id, ref: snapshot.ref };
    }
};

export function CommentProvider({ children }) {
    const query = collection(firestoreDB, 'comments').withConverter(commentConverter);
    const [values, loading, error] = useCollectionData(query);
    const comments = values ?? [];
    const { currentUserData } = useUserContext();
    const [currentUser, setCurrentUser] = useState(currentUserData);

    useEffect(() => {
        setCurrentUser(currentUserData);
    }, [currentUserData]);

    const addComment = async (comment) => {
        await addDoc(collection(firestoreDB, 'comments').withConverter(commentConverter), comment);
    };

    const handleCommentSubmit = async (e, imageId, commentText, setCommentText) => {
        e.preventDefault();
        if (commentText.trim()) {
            await addComment({
                imageId: imageId,
                author: currentUser ? currentUser.username : "Anonymous",
                text: commentText,
                timestamp: Date.now()
            });
            setCommentText("");
        }
    };

    const api = {
        comments, addComment, handleCommentSubmit
    };

    return (
        <CommentContext.Provider value={api}>
            {children}
        </CommentContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCommentContext = () => useContext(CommentContext);