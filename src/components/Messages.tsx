import './styles/message.css'

interface Message {
    type: string;
    message: string;
  }
  
  interface MessagesProps {
    messages: Message[];
  }
  
  

export const Messages = ({ messages }:MessagesProps) => {
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
