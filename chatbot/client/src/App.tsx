import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// @ts-ignore
const socket = io.connect('http://localhost:8080/');

function App() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([{ message: '', reply: '' }]);

  const sendMessage = () => {
    setMessageList((prev) => [...prev, { message: message, reply: '' }]);
    socket.emit('send_message', { message: `${message}` });
    setMessage('');
  };

  const updateResponse = (answer: string) => {
    const updatedMessage = {
      message: messageList[messageList.length - 1].message,
      reply: answer,
    };
    const updatedMessageList = [
      ...messageList.slice(0, messageList.length - 1),
      updatedMessage,
    ];
    console.log(updatedMessageList);
  };

  useEffect(() => {
    socket.on('received_message', (data: any) => {
      console.log(data, data.answers);
      updateResponse(data.answer);
    });
  }, [socket]);

  return (
    <div>
      <p>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>send message</button>
      </p>
    </div>
  );
}

export default App;
