import React, {useEffect} from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { useAlertContext } from '../context/AlertContext.jsx';
import { FaInfoCircle } from 'react-icons/fa';


function Alert() {
    const { message, clearMessage } = useAlertContext();

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                clearMessage();
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [message, clearMessage]);

    return (
        <BootstrapAlert
            className="custom-alert position-fixed bottom-0 end-0 m-3 z-1"
            variant="secondary"
            show={!!message}
            dismissible
            onClose={clearMessage}
        >
            <div className="d-flex align-items-center">
                <FaInfoCircle className="me-2 icon" />
                <div>
                    <BootstrapAlert.Heading className="fs-6 mb-1">Notification</BootstrapAlert.Heading>
                    <p className="mb-0">{message}</p>
                </div>
            </div>
        </BootstrapAlert>
    );
}

export default Alert;
