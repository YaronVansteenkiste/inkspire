import React, {createContext, useContext, useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, getDoc} from 'firebase/firestore';
import {firestoreDB} from '../services/firebase.js';

const ImageContext = createContext();

const imageConverter = {
    toFirestore: function (image) {
        return {
            title: image.title,
            author: image.author,
            description: image.description,
            category: image.category,
            likes: image.likes,
            published: image.published,
            publishDate: image.publishDate,
            url: image.url
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data();
        const id = snapshot.id;
        return { ...data, id, ref: snapshot.ref };
    }
};

export function ImagesProvider({ children }) {
    const query = collection(firestoreDB, 'images').withConverter(imageConverter);
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