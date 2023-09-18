import React from 'react';
import AccordionItem from "./AccordionItem";

export default function Accordion({data}) {

    return (
        <section className="accordion">
            <h2 className="u-text-center">Soft Skills For Computer Science</h2>
            {data.map((el, i) => (
                <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
            ))}
        </section>
    );
};

