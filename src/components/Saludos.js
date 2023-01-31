import React from 'react'

//El componente Saludos, recibe como parámetro el nombre de la persona.
//Saludo debe nombrar a esa persona
//Pase también el apellido

export default function Saludos(props) {
  return (
    <div>Hola <strong>{props.nombre} {props.apellidos}</strong>, Bienvenido a mi sitio WEB</div>
  )
}

