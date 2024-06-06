import { useState } from "react";
import Buttons from "../Buttons";
import { AccordionItem } from "./AccordionItem";
import { list } from "./list";
import './style.css';


export const AccordionServ = () => {

    const [accordion, setAccordion] = useState (list);

    const filteredAccordion = (searchTerm) => {
        const newList = list.filter (element => element.searchTerm.includes(searchTerm));
        setAccordion (newList);
    }

    return (<div>

    <Buttons  filteredAccordion={filteredAccordion}/>

        <div className="containerServ">

    {accordion.map((item, index) =>
        <AccordionItem key={index}
            titleServ={item.titleServ}
            content={item.content}
            price={item.price}
        />
    )}

        </div>

    </div>)
}