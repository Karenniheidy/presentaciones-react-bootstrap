// Tiene que tener nombre, apellido, dirección y contraseña.

import { useState } from "react"

export default function Formulario() {
    const [nombre,setNombre]=useState('')
    const [apellido,setApellido]=useState('')
    const [direccion,setDireccion]=useState('')
    const [telefono,setTelefono]=useState('')
    const [password,setPassword]=useState('')

    function verInfo(){
        alert(nombre+'',apellido+'',direccion+'',telefono+'',password+'')
    }
    return(
        <div>
            <input type="text" placeholder="Escriba nombre" onChange={(e)=>setNombre(e.target.value)}/>
            {nombre}
            <input type="text" placeholder="Escriba apellido" onChange={(e)=>setApellido(e.target.value)}/>
            {apellido}
            <input type="text" placeholder="Escriba dirección" onChange={(e)=>setDireccion(e.target.value)}/>
            {direccion}
            <input type="text" placeholder="Escriba teléfono" onChange={(e)=>setTelefono(e.target.value)}/>
            {telefono}
            <input type="text" placeholder="Escriba password" onChange={(e)=>setPassword(e.target.value)}/>
            <p style={{color:password.length>6?'green':'red'}}>{password}</p>
            <button onClick={verInfo()}>Aceptar</button>
        </div>
    )
}