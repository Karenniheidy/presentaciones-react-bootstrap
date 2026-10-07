import { useState } from "react"

export default function Nombre() {
    const [nombre,setNombre]=useState('')
    const [mensaje,setMensaje]=useState('')
    function ver() {
        if(nombre!='') {
            alert(nombre)
        }
        else{
            setMensaje('Ingrese su nombre')
        }
    }
    return(
        <div>
            <h1>Nombre: {nombre}</h1>
            <input type='text' onChange={(e)=>setNombre(e.target.value)}></input>
            {/*operador ternario*/}
            <p>{mensaje !=''?mensaje:''}</p>
            <button onClick={ver}>Aceptar</button>
        </div>
    )
}

//Si dando al boton de aceptar y el input está vacío debe mostrar abajo que diga el nombre no puede estar
//vacío, si el input esta abierto, debe mostrar la alerta