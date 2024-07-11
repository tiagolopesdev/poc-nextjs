'use client'

import React, { useState } from "react";

export default function Counter() {

    let [counter, setCounter] = useState(0);

    function add() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <div>{counter}</div>
            <button onClick={add}>Add</button>
        </div>
    )
}