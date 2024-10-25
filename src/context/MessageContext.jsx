import {createContext, useContext, useState} from 'react';

const MessageContext = createContext();

export function MessageProvider(props) {
    const [message, setMessage] = useState("");
    console.log({message});
    const clearMessage = () => setMessage("");

    const api = {
        message, setMessage, clearMessage
    };

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMessageContext = () => useContext(MessageContext);