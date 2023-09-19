import React, {useState} from 'react';
import AccordionItem from "./AccordionItem";

export default function Accordion({data}) {
    const [currentOpen, setCurrentOpen] = useState(null);
    return (
        <section className="accordion">
            <h2 className="u-text-center">Soft Skills For Computer Science</h2>
            {data.map((el, i) => (
                <AccordionItem currentOpen={currentOpen} onOpen={setCurrentOpen} title={el.title} num={i}
                               key={el.title}>{el.text}</AccordionItem>
            ))}
        </section>
    );
};

