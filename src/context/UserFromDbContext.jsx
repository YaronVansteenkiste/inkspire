import React, { createContext, useContext, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { firestoreDB } from '../services/firebase.js';

const UserContext = createContext();

const UserConverter = {
    toFirestore: function (user) {
        return {
            username: user.username,
            email: user.email
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data();
        const id = snapshot.id;
        return { ...data, id, ref: snapshot.ref };
    }
};

export function UserProvider({ children }) {
    const query = collection(firestoreDB, 'users').withConverter(UserConverter);
    const [values, loading, error] = useCollectionData(query);
    const users = values ?? [];
    const [userSelected, setUserSelected] = useState(undefined);

    const addUser = async (user) => {
        const userRef = doc(firestoreDB, 'users', user.uid).withConverter(UserConverter);
        await setDoc(userRef, user);
    };

    const api = {
        users, userSelected, setUserSelected, loading, error, addUser
    };

    return (
        <UserContext.Provider value={api}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);