import './index.css'
import { Messages } from './components/Messages';
import messages from "./data/messages.json";


export const ChatCard = () => {

    return (
        <div className='container'>
            <span className='label'>Chat Floating</span>

            <div className="contact-card">
                
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
