import { useContext } from "react";

import { Contact } from "../interfaces/contact";
import {useSearchFilter} from "../hooks/useSearchFilter";
import noImage from "../assets/no-image.jpg";
import { ChatContext } from "../context/ChatContext";

import './styles/contact.css'

interface ContactsProps {
    contacts: Contact[];
}

interface InfoContactProps {
    id: string;
    name: string;
    image: string;
}



export const Contacts = ({ contacts }: ContactsProps) => {
    const { setSelectedContact, setInfoContact } = useContext(ChatContext)

    const handleClick = ({ id, image, name }: InfoContactProps) => {
        setSelectedContact(id);
        setInfoContact({
            image,
            name
        });
    }
   

    const { searchTerm, setSearchTerm, filteredItems } = useSearchFilter(contacts, "name");

    return (
        <>
            <div className="search-container">
                <input
                        type="text"
                        placeholder="Buscar contacto"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                />
            </div>
            <div className="contacts-container">
                {filteredItems.map(({ name, image, id }, index) => (
                    <div key={index} className="contact" onClick={() => handleClick({id, name, image})}>
                        <div className="image-container">
                            <img 
                                src={`${image ? `${image}` : `${noImage}`}`} 
                                alt="" 
                            />
                        </div>
                        <span>{name}</span>
                    </div>
                ))}

            </div>
        </>
    );
};
