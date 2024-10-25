import React from "react";
import {ImagesProvider} from "../context/ImageFromDbContext.jsx";
import {CollabProvider} from "../context/CollabFromDbContext.jsx";
import {MessageProvider} from "../context/MessageContext.jsx";
import {CommentProvider} from "../context/CommentFromDbContext.jsx";

export function Providers({children}) {
    return (
        <ImagesProvider>
            <CollabProvider>
                <MessageProvider>
                    <CommentProvider>
                        {children}
                    </CommentProvider>
                </MessageProvider>
            </CollabProvider>
        </ImagesProvider>
    );
}