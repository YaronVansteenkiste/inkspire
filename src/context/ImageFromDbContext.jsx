import React, {createContext, useContext, useState} from 'react';
import { useCollectionData } from "react-firebase-hooks/firestore";
import {collection, query, orderBy, addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { firestoreDB } from '../services/firebase.js';

const ImageContext = createContext();


export function ImagesProvider({ children }) {
    const query = collection(firestoreDB, 'images');
    const [values, loading, error] = useCollectionData(query);
    const images = values ?? [];
    const [imageSelected, setImageSelected] = useState(undefined);


    const api = {
        images, imageSelected, setImageSelected
    };

    return (
        <ImageContext.Provider value={api}>
            {children}
        </ImageContext.Provider>
    );
}

export const useImageContext = () => useContext(ImageContext);