import React, {useEffect, useState} from 'react';
import { ProfileDetails } from '../components/ProfileDetails';
import { ProfileActions } from '../components/ProfileActions';
import { useAuthContext } from '../context/AuthContext.jsx';
import { useUserContext } from '../context/UserFromDbContext.jsx';
import YourWorks from "../components/YourWorks.jsx";
import {Row} from "react-bootstrap";
import {useImageContext} from "../context/ImageFromDbContext.jsx";

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
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-header text-center">
                            <h4>{currentUserData.username}</h4>
                        </div>
                    </div>
                    <ProfileActions />
                </div>

                <div className="col-md-8">
                    <ProfileDetails userData={currentUserData} />
                </div>
            </div>
            <Row>
                {showYourWorks && <YourWorks yourWorksData={yourWorks} />}
            </Row>
        </div>
    );
}

export default ProfilePage;
