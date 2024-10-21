import React from "react";
import {ImagesProvider} from "../context/ImageFromDbContext.jsx";

export function Providers({children}) {
    return (
        <ImagesProvider>
            {children}
        </ImagesProvider>
    );
}