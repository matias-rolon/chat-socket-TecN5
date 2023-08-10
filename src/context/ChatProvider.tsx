import { ChatContext } from "./ChatContext"
import { useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ChatProvider = ({children}: Props ) => {
  const [selectedContact, setSelectedContact] = useState('');
    
  return (
    <ChatContext.Provider value={{ 
        selectedContact,
        setSelectedContact
     }}>
        { children }
    </ChatContext.Provider>
  )
}
