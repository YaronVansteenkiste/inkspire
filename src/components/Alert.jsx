import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { useAlertContext } from '../context/AlertContext.jsx';

function Alert() {
    const { message, clearMessage } = useAlertContext();

    return (
        <BootstrapAlert
            className="position-fixed bottom-0 end-0 m-3"
            variant="secondary"
            show={!!message}
            dismissible
            onClose={clearMessage}
        >
            <BootstrapAlert.Heading className="fs-6">Notification</BootstrapAlert.Heading>
            <p className="mb-0">{message}</p>
        </BootstrapAlert>
    );
}

export default Alert;
