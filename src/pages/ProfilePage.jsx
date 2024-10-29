import React, { useEffect, useState } from 'react';
import { ProfileDetails } from '../components/ProfileDetails';
import { ProfileActions } from '../components/ProfileActions';
import { useAuthContext } from '../context/AuthContext.jsx';
import { useUserContext } from '../context/UserFromDbContext.jsx';
import YourWorks from "../components/YourWorks.jsx";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useImageContext } from "../context/ImageFromDbContext.jsx";
import Avvvatars from 'avvvatars-react';

function ProfilePage() {
    const { images } = useImageContext();
    const { currentUser } = useAuthContext();
    const { currentUserData } = useUserContext();

    const [showYourWorks, setShowYourWorks] = useState(!!currentUserData);

    useEffect(() => {
        setShowYourWorks(!!currentUserData);
    }, [currentUserData]);

    if (!currentUser || !currentUserData) {
        return <div>Loading...</div>;
    }

    const yourWorks = currentUserData ? images.filter(img => img.author === currentUserData.username) : [];

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
                {showYourWorks && <YourWorks yourWorksData={yourWorks} />}
            </Row>
        </Container>
    );
}

export default ProfilePage;
