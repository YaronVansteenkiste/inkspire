import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestoreDB } from '../services/firebase.js';
import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';

const storage = getStorage();

async function imageUploadService(file, filename) {
    const storageRef = ref(storage, `images/${filename}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}

async function saveImageMetadata(metadata) {
    const imagesCollection = collection(firestoreDB, 'images');
    await addDoc(imagesCollection, metadata);
}


export async function handleImageUpload(file, title, author, description, category) {
    const url = await imageUploadService(file);
    const metadata = {
        title,
        url,
        author,
        description,
        likes: 0,
        published: true,
        publishDate: new Date().toISOString(),
        category: category
    };
    await saveImageMetadata(metadata);
}

async function saveCollabMetadata(metadata, collabId = null) {
    const collabCollection = collection(firestoreDB, 'collaborations');
    if (collabId) {
        const collabDoc = doc(collabCollection, collabId);
        await setDoc(collabDoc, metadata);
    } else {
        await addDoc(collabCollection, metadata);
    }

}

// src/services/imageUploadService.jsx
export async function handleCollabUpload(paths, title, description, fileName, collabId = null) {
    // Prepare metadata
    const metadata = {
        title,
        description,
        paths // Include paths directly in metadata
    };

    // Save metadata to Firestore
    await saveCollabMetadata(metadata, collabId);
}