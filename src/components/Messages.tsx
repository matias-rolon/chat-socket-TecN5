import './styles/message.css'

interface Props{
    type: string;
    message: string;
    user?: string;
}

export const Messages = ({ message, type }: Props) => {
  return (
    <div className="messages-container">
        <div className={`message ${type === 'sender' ? 'your-message' : 'other-message'}`}>
            { message }
        </div>
    </div>
  )
}
