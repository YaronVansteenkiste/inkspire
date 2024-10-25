import React, { createContext, useContext, useState } from 'react';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, addDoc } from 'firebase/firestore';
import { firestoreDB } from '../services/firebase.js';

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

    const addComment = async (comment) => {
        await addDoc(collection(firestoreDB, 'comments').withConverter(commentConverter), comment);
    }

    const api = {
        comments, addComment
    };

    return (
        <CommentContext.Provider value={api}>
            {children}
        </CommentContext.Provider>
    );
}

export const useCommentContext = () => useContext(CommentContext);