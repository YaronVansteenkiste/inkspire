import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'default_api_key',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'default_auth_domain',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'default_project_id',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'default_storage_bucket',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'default_messaging_sender_id',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || 'default_app_id'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseApp);
export const imageDb = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);

console.log("initialized firebase connection");