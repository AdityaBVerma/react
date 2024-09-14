import { useState } from "react"
import Life from "./Life.jsx"

export default function Counter() {

    const [ counter, setCounter ] = useState(0)
    const [ life, setLife ] = useState(true)

    const addLife = ()=>{
        if (counter<30 && life) setCounter(prevCounter => prevCounter + 1)
    }

    const subtractLife = ()=>{
        if (counter<=0) {
            setLife(false)
        } else {
            setCounter(prevCounter => prevCounter - 1)
        }
    }

    return (
        <>
            {(life)?
                <div>
                    <h1>Karma Counter</h1>
                    <h3>Karma points : {counter}</h3>
                    <button onClick= {addLife}>Good Deeds</button> 
                    <button onClick= {subtractLife}>Bad Deeds</button>
                </div>
            :<Life />}
        </>
    )
}