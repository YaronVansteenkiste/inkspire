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



export async function handleImageUpload(file, title, authorId, description, category) {
    const filename = `${new Date().getTime()}_${file.name}`;
    const url = await imageUploadService(file, filename);
    const metadata = {
        title,
        url,
        authorId,
        description,
        likes: 0,
        published: true,
        publishDate: new Date().toISOString(),
        category: category
    };
    const docRef = await addDoc(collection(firestoreDB, 'images'), metadata);
    return docRef.id;
}

async function uploadJsonToStorage(jsonData, filename) {
    const storageRef = ref(storage, `collaborations/${filename}`);
    const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    return url;
}

export async function handleCollabUpload(paths, title, description, fileName, collabId = null) {
    const jsonUrl = await uploadJsonToStorage(paths, fileName);
    const metadata = {
        title,
        description,
        pathsUrl: jsonUrl
    };

    const collabCollection = collection(firestoreDB, 'collaborations');
    if (collabId) {
        const collabDoc = doc(collabCollection, collabId);
        await setDoc(collabDoc, metadata);
    } else {
        await addDoc(collabCollection, metadata);
    }
}