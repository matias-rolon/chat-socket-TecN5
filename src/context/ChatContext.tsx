import { createContext } from 'react'

type ChatContextProps = {
    selectedContact: string;
    infoContact: { name: string; image: string; }

    setInfoContact: React.Dispatch<React.SetStateAction<{
        name: string;
        image: string;
    }>>
    setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
    
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps)