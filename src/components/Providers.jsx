import React from "react";
import {ImagesProvider} from "../context/ImageFromDbContext.jsx";
import {CollabProvider} from "../context/CollabFromDbContext.jsx";
import {AlertProvider} from "../context/AlertContext.jsx";
import {CommentProvider} from "../context/CommentFromDbContext.jsx";
import {UserProvider} from "../context/UserFromDbContext.jsx";

export function Providers({children}) {
    return (
        <ImagesProvider>
            <CollabProvider>
                <AlertProvider>
                    <CommentProvider>
                        <UserProvider>
                            {children}
                        </UserProvider>
                    </CommentProvider>
                </AlertProvider>
            </CollabProvider>
        </ImagesProvider>
    );
}