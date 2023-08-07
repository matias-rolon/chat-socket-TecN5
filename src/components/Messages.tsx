import {Message} from "../interfaces/message";
import './styles/message.css'

interface MessagesProps {
    messages: Message[];
}


export const Messages = ({messages} : MessagesProps) => {
    return (
        <div className="messages-container">

            {
            messages.map(({message, type}, index) => (
                <div key={index}
                    className={
                        `message ${
                            type === 'sender' ? 'your-message' : 'other-message'
                        }`
                }>
                    {
                    message
                } </div>
            ))
        } </div>
    )
}
