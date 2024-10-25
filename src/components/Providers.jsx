import React from "react";
import {ImagesProvider} from "../context/ImageFromDbContext.jsx";
import {CollabProvider} from "../context/CollabFromDbContext.jsx";
import {MessageProvider} from "../context/MessageContext.jsx";

export function Providers({children}) {
    return (
        <ImagesProvider>
            <CollabProvider>
                <MessageProvider>
                    {children}
                </MessageProvider>
            </CollabProvider>
        </ImagesProvider>
    );
}