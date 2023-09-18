import React from 'react';
import Accordion from "../components/Accordion";
import {data} from './../data.js';

export default function App() {

    return (
        <main className="u-wrapper">
            <Accordion data={data} />
        </main>

    );
};