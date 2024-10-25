import React from 'react';
import { useMessageContext } from '../context/MessageContext.jsx';
import Toast from "react-bootstrap/Toast";

function Message(props) {
    const { message, setMessage, clearMessage} = useMessageContext();


    return (
        <Toast className="position-fixed bottom-1 end-0 m-3 bg-secondary"
               show={!!message} onClose={() => clearMessage()}>
            <Toast.Header>
                <strong className="me-auto">message</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default Message;