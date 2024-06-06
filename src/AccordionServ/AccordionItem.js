import { useState } from "react";
import imageFavicon from './icons8-cat-footprint-40.png';


export const AccordionItem = ({titleServ, content, price}) => {

    const [isOpen, setIsOpen] = useState (false);

    const handleIsOpen = () => {
        setIsOpen (!isOpen);
    }

    return (<div>

        <div className={ isOpen ? 'active' : 'default' } onClick={handleIsOpen}>

            <div className="titleItem">
                {titleServ} <span><img className="favImage" src={imageFavicon} width="22px" height="22px" alt='fav'/></span>
            </div>

            {
                isOpen && <div className="content">
                    {content}
                    <div className="price">
                        {price}
                    </div>
                </div>
            }

        </div>

    </div>)
}