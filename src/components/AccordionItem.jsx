import React from 'react';

export default function AccordionItem({currentOpen, onOpen, num, title, children}) {
    //**************** variables ****************//
    const isOpen = num === currentOpen;


    //**************** functions ****************//
    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <article className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </article>

    );
};