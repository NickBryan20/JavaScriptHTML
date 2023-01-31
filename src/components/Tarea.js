//Componente que muestra las actividades(tareas)diarias de una persona
import React, {useState} from "react";
import  {datos} from './Pasar';

function Tarea(){

const [listadoTareas, setListadoTareas]=useState(datos)

const DeleteHandLerEvent=(item)=>{
    if(window.confirm("Confirme usted que desea eliminar esta tarea?"))
    {
        const nuevaLista=listadoTareas.filter(tarea=>{
            return tarea.numeronrc!==item.numeronrc})
        setListadoTareas(nuevaLista)
    }
}
    return (
        <div>
            <div className='container'>
                <div className='row mt-4'>
                    {listadoTareas.map((item,index)=>{return <div className='col-md-4' key={index}>
                            <div className='card mt-4'>
                                <div className='card-head'>
                                    <p></p>
                                    <h3>{item.materia}</h3>
                                </div>
                                    <div className='card-body'>
                                        <p><strong>{item.parcial1}</strong></p>
                                        <p><strong>{item.parcial2}</strong></p>
                                        <p></p>
                                    </div>
                                    <div className='card-footer'>
                                        <mark>{item.nrc}</mark>
                                        <p>{item.numeronrc}</p>
                                        <p></p>
                                        <p><button className='btn btn-danger'onClick={()=> DeleteHandLerEvent(item)}>Eliminar</button></p>
                                    </div>
                            </div>
                    </div>})}
                </div>
            </div>
        </div>
    )
}

export default Tarea