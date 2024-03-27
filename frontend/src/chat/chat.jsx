import React, { useEffect, useRef , useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 
import './chat.css';

function Chat() {
  const messagesRef = useRef(null);

  // State to manage the initial message location
  const [location, setLocation] = useState(true);

  useEffect(() => {
    // Send initial messages when the component mounts
    if (location) {
      sendMessage('Hello there! How may I help you?');
      setTimeout(() => sendMessage('What is my balance?'));
      setLocation(false); // Update location to prevent sending messages again
    }
  }, [location]);

  // Function to get the message text from the input field
  const getMessageText = () => {
    const messageInput = document.querySelector('.message_input');
    return messageInput.value;
  };

  // Function to send a message
  const sendMessage = (text) => {
    if (text.trim() === '') {
      return;
    }

    const messages = document.querySelector('.messages');
    const messageSide = messages.classList.contains('left') ? 'right' : 'left';

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageSide);

    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.innerHTML = text;
    messageElement.appendChild(textElement);

    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
  };

  // Function to handle sending a message when the send button is clicked
  const handleSendMessageClick = () => {
    sendMessage(getMessageText());
    document.querySelector('.message_input').value = '';
  };

  // Function to handle sending a message when the Enter key is pressed
  const handleKeyUp = (e) => {
    if (e.which === 13) {
      sendMessage(getMessageText());
      document.querySelector('.message_input').value = '';
    }
  };

  return (
    <div className="chat-container">
      <div className="messages" ref={messagesRef}></div>
      <input
        type="text"
        className="message_input"
        placeholder="Type a message..."
        onKeyUp={handleKeyUp}
      />
      <button className="send_message" onClick={handleSendMessageClick}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
}

export default Chat;
