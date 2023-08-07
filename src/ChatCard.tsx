import './index.css'
import {Messages} from './components/Messages';
import {Contacts} from './components/Contacts';

import messages from "./data/messages.json";
import contacts from "./data/contacts.json";


export const ChatCard = () => {

    return (
        <div className='container'>
            <span className='label'>Chat Floating</span>

            <div className="contact-card">
                <Contacts contacts={contacts}/>
            </div>

            <div className='chat-card'>
                <div className='chat'>
                    <Messages messages={messages}/>
                </div>
                <div className="content">
                    <input type="text" className="input"/>
                    <button className='button'>Enviar</button>
                </div>
            </div>
        </div>
    )
}
