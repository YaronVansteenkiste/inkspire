import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserFromDbContext.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";

function Footer() {
    const { currentUserData } = useUserContext();
    const { currentUser } = useAuthContext();

    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Explore</Link></li>
                <li className="nav-item"><Link to="/collab" className="nav-link px-2 text-light">Collab</Link></li>
                {currentUser && currentUserData ? (
                    <li className="nav-item"><Link to="/profile" className="nav-link px-2 text-light">Profile</Link></li>
                ) : (
                    <>
                        <li className="nav-item"><Link to="/register" className="nav-link px-2 text-light">Register</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link px-2 text-light">Login</Link></li>
                    </>
                )}
            </ul>
            <p className="text-center text-light">© 2024 YaronVansteenkiste</p>
        </footer>
    );
}

export default Footer;