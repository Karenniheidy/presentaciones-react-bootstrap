import { useState } from 'react'

export default function Estados() {
    const [conteo, setConteo]=useState(0)
    function aumentar(){
        setConteo(conteo+1)
    }

    function restar(){
        setConteo(conteo-1)
    }
    return(
        <div>
            <h1>conteo: {conteo}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={()=>setConteo(conteo-1)}>Disminuir</button>
            <button onClick={restar}>DisminuirClasica</button>
        </div>
    )
}