import React, {useState} from 'react';

export default function AccordionItem({num, title, text}) {
    //**************** variables ****************//
    const [isOpen, setIsOpen] = useState(false);

    //**************** functions ****************//
    function handleToggle() {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <article className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </article>

    );
};