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

async function saveCollabMetadata(metadata, collabId) {
    const collabsCollection = collection(firestoreDB, 'collaborations');
    if (collabId) {
        const collabDoc = doc(collabsCollection, collabId);
        await setDoc(collabDoc, metadata, { merge: true });
    } else {
        await addDoc(collabsCollection, metadata);
    }
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

export async function handleCollabUpload(file, title, description, fileName, collabId = null) {
    const url = await imageUploadService(file, fileName);

    const metadata = {
        title,
        url,
        description,
    };

    await saveCollabMetadata(metadata, collabId);
}