import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestoreDB } from     '../services/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const storage = getStorage();

async function imageUploadService(file) {
    const storageRef = ref(storage, `images/${file.name}`);
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