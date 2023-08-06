import React from 'react';
import './styles/message.css'

interface Message {
    type: 'reciber' | 'sender';
    message: string;
  }
  
  interface MessagesProps {
    messages: Message[];
  }
  
  

export const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="messages-container">
        
        {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.type === 'sender' ? 'your-message' : 'other-message'}`}>
          {message.message}
        </div>
      ))}
      
    </div>
  )
}
