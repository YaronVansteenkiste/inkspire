import React from "react";
import {ImagesProvider} from "../context/ImageFromDbContext.jsx";
import {CollabProvider} from "../context/CollabFromDbContext.jsx";

export function Providers({children}) {
    return (
        <ImagesProvider>
            <CollabProvider>
            {children}
            </CollabProvider>
        </ImagesProvider>
    );
}