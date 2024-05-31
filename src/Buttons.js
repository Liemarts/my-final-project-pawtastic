import { list } from "./AccordionServ/list";

function Buttons ({setIsOpen}) {

    const chosenServ = (searchTerm) => {
        const newServ = list.filter ( element => element.searchTerm.includes(searchTerm));
        setIsOpen (newServ);
    }

    return (<div className="btnContainer">

        <button className="btn" onClick={()=> chosenServ ('health')}>Здоровье</button>
        <button className="btn">Красота</button>
        <button className="btn">Безопасность</button>

    </div>)
}

export default Buttons;