import { useState } from "react";
import Buttons from "../Buttons";
import { AccordionItem } from "./AccordionItem";
import { list } from "./list";
import './style.css';


export const AccordionServ = () => {

    const [isOpen, setIsOpen] = useState (false);

    return (<div>

    <Buttons  setIsOpen={setIsOpen}/>

        <div className="containerServ">

    { list.map((item, index) =>
        <AccordionItem key={index}
            titleServ={item.titleServ}
            content={item.content}
            price={item.price}
        />
    )}

        </div>

    </div>)
}