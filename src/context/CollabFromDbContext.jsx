// src/context/CollabFromDbContext.jsx
import React, {createContext, useContext, useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, addDoc} from 'firebase/firestore';
import {firestoreDB} from '../services/firebase.js';

const CollabContext = createContext();

const CollabConverter = {
    toFirestore: function (collab) {
        return {
            title: collab.title,
            description: collab.description,
            paths: collab.paths
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data();
        console.log("Loaded data from Firestore:", data); // Debugging line
        const id = snapshot.id;
        return { ...data, id, ref: snapshot.ref };
    }
};

// src/context/CollabFromDbContext.jsx
export function CollabProvider({ children }) {
    const query = collection(firestoreDB, 'collaborations').withConverter(CollabConverter);
    const [values, loading, error] = useCollectionData(query);
    const collaborations = values ?? [];
    console.log("Collaborations state:", collaborations); // Debugging line
    const [collabSelected, setCollabSelected] = useState(undefined);

    const addCollaboration = async (collab) => {
        await addDoc(query, collab);
    };

    const api = {
        collaborations, collabSelected, setCollabSelected, addCollaboration
    };

    return (
        <CollabContext.Provider value={api}>
            {children}
        </CollabContext.Provider>
    );
}

export const useCollabContext = () => useContext(CollabContext);