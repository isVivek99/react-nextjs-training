import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// @ts-ignore
const socket = io.connect('http://localhost:8080/');

function App() {
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log('semd');

    socket.emit('send_message', { message: `${message}` });
  };

  useEffect(() => {
    socket.on('received_message', (data: any) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <p>
      <input type='text' onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>send message</button>
    </p>
  );
}

export default App;
