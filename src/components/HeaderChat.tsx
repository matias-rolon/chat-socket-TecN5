import './styles/headerChat.css'
import noImage from "../assets/no-image.jpg";

interface Props {
    name: string;
    image: string
}

export const HeaderChat = ({image, name}: Props) => {
  return (
    <div className="contact-info">
        <div className="image-contact">
            <img
                src={`${image ? `${image}` : `${noImage}`}`} 
                alt="" 
            />
        </div>
        <div className="name-contain">
            <span>{name}</span>
        </div>
    </div>
  )
}
