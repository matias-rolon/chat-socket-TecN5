import './index.css'
import { Messages } from './components/Messages';

export const ChatCard = () => {
    return (
        <div className='chat-card'>
            <span className='label'>Chat Floating</span>
            <div className='chat'>
                <Messages type='sender' message='Mensaje enviado prueba' />
                <Messages type='reciber' message='Mensaje recibido prueba' />
                <Messages type='sender' message='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, eaque quia! Sapiente culpa facere ipsum nemo aperiam quis architecto voluptatum fugi' />
            </div>
            <div className="content">
                <input type="text" className="input"/>
                <button className='button'>Enviar</button>
            </div>
        </div>
    )
}
