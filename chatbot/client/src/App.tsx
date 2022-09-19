import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

// @ts-ignore
const socket = io.connect('http://localhost:8080/');
interface message {
  message: string;
  reply: string;
}

function App() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any>([]);

  const sendMessage = () => {
    socket.emit('send_message', { message: `${message}` });
    setMessage('');
  };

  const updateResponse = (utterance: string, answer: string) => {
    console.log(messageList);
    setMessageList((prev: any) => [
      ...prev,
      { message: utterance, reply: answer },
    ]);
  };

  useEffect(() => {
    socket.on('received_message', (data: any) => {
      updateResponse(data.utterance, data.answer);
    });

    // CLEAN UP THE EFFECT
    // return () => socket.disconnect();
  }, []);

  return (
    <div>
      <div className='chatbox'>
        {messageList &&
          messageList.map((messageItem: message, index: number) => (
            <div key={index}>
              <div>
                <p className='bold mb-1'>user</p>
                <p>{messageItem.message}</p>
              </div>
              <div>
                <p className='bold'>reply</p>
                <p>{messageItem.reply}</p>
              </div>
            </div>
          ))}
      </div>
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
