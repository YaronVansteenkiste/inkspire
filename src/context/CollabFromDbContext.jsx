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
        const id = snapshot.id;
        return { ...data, id, ref: snapshot.ref };
    }
};

export function CollabProvider({ children }) {
    const query = collection(firestoreDB, 'collaborations').withConverter(CollabConverter);
    const [values, loading, error] = useCollectionData(query);
    const collaborations = values ?? [];
    const [collabSelected, setCollabSelected] = useState(undefined);

    const addCollaboration = async (collab) => {
        await addDoc(query, collab);
    };

    const api = {
        collaborations, collabSelected, setCollabSelected, addCollaboration, loading, error
    };

    return (
        <CollabContext.Provider value={api}>
            {children}
        </CollabContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCollabContext = () => useContext(CollabContext);