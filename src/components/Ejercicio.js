//Diseñe el componente que muestre su nombre, edad y pasa tiempo
//A continuación, muéstrelo dos veces en su aplicación
//Modifique el componente para que los datos sean parametrizados
import React from 'react'

export default function Ejercicio(props) {
  return (
    //<div>Nombre: Nick Bryan<br/>Edad: 21 años<br/>Pasatiempo: Trabajar</div>
    <div>
        <p>Mi nombre es {props.nombre}</p>
        <p>Mi edad es {props.edad} años</p>
        <p>Mi pasatiempo es <strong>{props.pasatiempo}</strong></p>
    </div>
  )
}