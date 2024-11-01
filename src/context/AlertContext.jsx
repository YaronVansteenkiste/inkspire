import {createContext, useContext, useState} from 'react';

const AlertContext = createContext();

export function AlertProvider(props) {
    const [message, setMessage] = useState("");
    const clearMessage = () => setMessage("");

    const api = {
        message, setMessage, clearMessage
    };

    return <AlertContext.Provider value={api}>
        {props.children}
    </AlertContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAlertContext = () => useContext(AlertContext);