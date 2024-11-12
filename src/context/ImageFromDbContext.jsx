import React, {createContext, useContext, useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, updateDoc, deleteDoc} from 'firebase/firestore';
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
        return {...data, id, ref: snapshot.ref};
    }
};

export function ImagesProvider({children}) {
    const query = collection(firestoreDB, 'images').withConverter(imageConverter);
    const [values, loading, error] = useCollectionData(query);
    const images = values ?? [];
    const [imageSelected, setImageSelected] = useState(undefined);

    const incrementLikes = async (image) => {
        const imageRef = image.ref;
        await updateDoc(imageRef, {
            likes: image.likes + 1
        });
    }

    const updateImage = async (updatedImage) => {
        const imageRef = updatedImage.ref;
        await updateDoc(imageRef, {
            title: updatedImage.title,
            description: updatedImage.description,
            category: updatedImage.category,
            url: updatedImage.url
        });
    };

    const removeImage = async (image) => {
        const imageRef = image.ref;
        await deleteDoc(imageRef);
    };

    const api = {
        images, imageSelected, setImageSelected, incrementLikes, updateImage, removeImage
    };
    return (
        <ImageContext.Provider value={api}>
            {children}
        </ImageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useImageContext = () => useContext(ImageContext);