import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/listaDeTareas.css'
import Tarea from './Tarea';


function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualiazadas = [tarea, ...tareas];
            setTareas(tareasActualiazadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualiazadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualiazadas);
    }

    const completarTarea = id => {
        const tareasActualiazadas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualiazadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea} />

                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;