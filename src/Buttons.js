
function Buttons ({filteredAccordion}) {


    return (<div className="btnContainer">

        <button className="btn" onClick={()=> filteredAccordion ('health')}>Здоровье</button>
        <button className="btn" onClick={()=> filteredAccordion ('beauty')}>Красота</button>
        <button className="btn" onClick={()=> filteredAccordion ('safety')}>Безопасность</button>

    </div>)
}

export default Buttons;