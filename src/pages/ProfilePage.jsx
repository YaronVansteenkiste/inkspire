import React, {useEffect, useState} from 'react';
import {ProfileDetails} from '../components/ProfileDetails';
import {ProfileActions} from '../components/ProfileActions';
import {useAuthContext} from '../context/AuthContext.jsx';
import {useUserContext} from '../context/UserFromDbContext.jsx';
import YourWorks from "../components/YourWorks.jsx";
import {Card, Col, Container, Row} from "react-bootstrap";
import Avvvatars from 'avvvatars-react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../services/firebase.js';

export function ProfilePage() {
    const [images, setImages] = useState([]);
    const { currentUser } = useAuthContext();
    const { currentUserData } = useUserContext();

    useEffect(() => {
        const fetchImages = async () => {
            if (currentUserData) {
                const q = query(collection(firestoreDB, 'images'), where('authorId', '==', currentUserData.id));
                const querySnapshot = await getDocs(q);
                const fetchedImages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setImages(fetchedImages);
            }
        };

        fetchImages();
    }, [currentUserData]);

    if (!currentUser || !currentUserData) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={12}>
                    <h1 className="text-center">{currentUserData.username}</h1>
                </Col>
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Header className="text-center mx-auto">
                            <Avvvatars value={currentUserData.username} size={100} />
                        </Card.Header>
                        <Card.Body>
                            <ProfileActions />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={8}>
                    <ProfileDetails userData={currentUserData} />
                </Col>
            </Row>
            <Row>
                {currentUserData && <YourWorks yourWorksData={images} />}
            </Row>
        </Container>
    );
}

export default ProfilePage;