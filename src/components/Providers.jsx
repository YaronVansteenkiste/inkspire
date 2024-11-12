import React from "react";
import {ImagesProvider} from "../context/ImageFromDbContext.jsx";
import {CollabProvider} from "../context/CollabFromDbContext.jsx";
import {AlertProvider} from "../context/AlertContext.jsx";
import {CommentProvider} from "../context/CommentFromDbContext.jsx";
import {UserProvider} from "../context/UserFromDbContext.jsx";
import {AuthProvider} from "../context/AuthContext.jsx";

export function Providers({children}) {
    return (
        <AuthProvider>
            <ImagesProvider>
                <CollabProvider>
                    <AlertProvider>
                        <UserProvider>
                            <CommentProvider>
                                {children}
                            </CommentProvider>
                        </UserProvider>
                    </AlertProvider>
                </CollabProvider>
            </ImagesProvider>
        </AuthProvider>
    );
}