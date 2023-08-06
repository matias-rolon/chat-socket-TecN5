import './index.css'
import { Messages } from './components/Messages';

export const ChatCard = () => {

    interface Message {
        type: "reciber" | "sender";
        message: string;
      }

      const messages: Message[] = [
        { type: 'reciber', message: 'Hola, ¿cómo estás?' },
        { type: 'sender', message: 'Todo bien, gracias.' },
        { type: 'reciber', message: '¿Y tú qué tal?' },
        { type: 'sender', message: 'Estoy bien también, gracias por preguntar.' },
        { type: 'reciber', message: 'Eso suena genial.' },
        { type: 'sender', message: 'Hola, soy otra persona.' },
        { type: 'reciber', message: 'Me alegra que estés bien.' },
        { type: 'sender', message: '¿Qué has estado haciendo?' },
      ];

      
    return (
        <div className='chat-card'>
            <span className='label'>Chat Floating</span>
            <div className='chat'>
                <Messages messages={messages} />                
            </div>
            <div className="content">
                <input type="text" className="input"/>
                <button className='button'>Enviar</button>
            </div>
        </div>
    )
}
