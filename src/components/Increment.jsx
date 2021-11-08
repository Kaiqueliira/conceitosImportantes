import { useState } from "react"

export function Increment() {
    const [cont, setCont] = useState(0)

    function add() {
        setCont(cont + 1)
    }
    return (
        <>
            <h1>{cont}</h1>
            <button onClick={add}>Aqui</button>
        </>
    )
}