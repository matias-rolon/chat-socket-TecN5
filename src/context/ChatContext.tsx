import { createContext } from 'react'

type ChatContextProps = {
    selectedContact: string;
    setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps)