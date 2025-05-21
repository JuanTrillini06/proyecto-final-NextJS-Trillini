"use client"
import {useState} from "react"

export function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCounter(counter + 1)}>+</button>
            <span>{counter}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    )
}

