import React, {createContext, useContext, useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from 'firebase/firestore';
import {firestoreDB} from '../services/firebase.js';

const CollabContext = createContext();

const CollabConverter = {
    toFirestore: function (collab) {
        return {
            title: collab.title,
            description: collab.description,
            url: collab.url
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


    const api = {
        collaborations, collabSelected, setCollabSelected
    };

    return (
        <CollabContext.Provider value={api}>
            {children}
        </CollabContext.Provider>
    );
}

export const useCollabContext = () => useContext(CollabContext);