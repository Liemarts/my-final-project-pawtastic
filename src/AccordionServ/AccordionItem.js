import { useState } from "react";
import imageFavicon from './icons8-cat-footprint-40.png';
/*import { list } from "./list";
import Buttons from "../Buttons";*/

export const AccordionItem = ({titleServ, content, price}) => {

    const [isOpen, setIsOpen] = useState (false);

    const handleIsOpen = () => {
        setIsOpen (!isOpen);
    }

    /*const chosenServ = (searchTerm) => {
        const newServ = list.filter ( element => element.searchTerm.includes (searchTerm));
        setIsOpen (newServ);
    }*/


    return (<div>

        {/* <Buttons filteredServ={chosenServ} /> */}

        <div className={ isOpen ? 'active' : 'default' } onClick={handleIsOpen}>

            <div className="titleItem">
                {titleServ} <span><img src={imageFavicon} width="22px" height="22px" alt='fav'/></span>
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