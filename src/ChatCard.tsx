import './index.css'

export const ChatCard = () => {
    return (
        <div className='chat-card'>
            <span className='label'>Chat Floating</span>
            <div className='chat'></div>
            <div className="content">
                <input type="text" className="input"/>
                <button className='button'>Enviar</button>
            </div>
        </div>
    )
}
