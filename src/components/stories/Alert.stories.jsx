import React, { useState } from 'react';
import { AlertProvider, useAlertContext } from "../../context/AlertContext.jsx";
import Alert from '../Alert.jsx';

const meta = {
  component: Alert,
};

export default meta;

const AlertSetter = () => {
  const { setMessage } = useAlertContext();
  const [input, setInput] = useState('');

  return (
      <div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a message"
        />
        <button onClick={() => setMessage(input)}>Set Message</button>
      </div>
  );
};

export const Default = () => (
    <AlertProvider>
      <AlertSetter />
      <Alert />
    </AlertProvider>
);