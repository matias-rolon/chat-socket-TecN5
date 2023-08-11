import { ChatContext } from "./ChatContext"
import { useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ChatProvider = ({children}: Props ) => {
  const [infoContact, setInfoContact] = useState({ 
    name: "Hola",
    image: "https"
   })
  const [selectedContact, setSelectedContact] = useState('');
    
  return (
    <ChatContext.Provider value={{ 
        selectedContact,
        infoContact,

        setInfoContact,
        setSelectedContact
     }}>
        { children }
    </ChatContext.Provider>
  )
}
