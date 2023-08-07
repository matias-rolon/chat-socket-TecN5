import { Contact } from "../interfaces/contact";
import {useSearchFilter} from "../hooks/useSearchFilter";
import noImage from "../assets/no-image.jpg";

import './styles/contact.css'

interface ContactsProps {
    contacts: Contact[];
}

export const Contacts = ({ contacts }: ContactsProps) => {
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
                
                {filteredItems.map(({ name, image }, index) => (
                    <div key={index} className="contact">
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
