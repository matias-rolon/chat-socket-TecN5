import {Contact} from "../interfaces/contact";
import noImage from "../assets/no-image.jpg";

import './styles/contact.css'

interface ContactsProps {
    contacts: Contact[];
}

export const Contacts = ({contacts} : ContactsProps) => {
    return (<div className="contacts-container">
        {
        contacts.map(({
                        name,
                        image
                    }, index) => (
                        <div key={index} className="contact">
                            <div className="image-container">
                                <img src={`${image ? `${image}` : `${noImage}`}`} alt="" />
                            </div>
                            <span>{name}</span>
                        </div>
                    ))
                } </div>
        )
    }
