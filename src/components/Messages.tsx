import { useContext } from "react";
// import {Message} from "../interfaces/message";
import './styles/message.css'
import { ChatContext } from "../context/ChatContext";
import { HeaderChat } from './HeaderChat';

interface MessagesProps {
    messages: {
        id: string;
        messages: {
            message: string;
            type: string;
        }[];
    }[]
}

export const Messages = ( props : MessagesProps) => {
    const {selectedContact, infoContact} = useContext(ChatContext);
    const contact = props.messages.find( item => item.id === selectedContact )    

    return (
        <div className="messages-container">
            <HeaderChat image={infoContact.image} name={infoContact.name} />
            {
            contact?.messages.map(({message, type}, index) => (
                <div key={index}
                    className={
                        `message ${ type === 'sender' ? 'your-message' : 'other-message'}`
                    }
                >
                    { message } 
                </div>
            ))
        } 
        </div>
    )
}
