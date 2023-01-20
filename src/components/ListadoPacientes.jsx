import Paciente from "./Paciente"
import {useEffect} from "react"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
   
 /*  cuando se crea un nuevo paciente aparece en consola
 useEffect(() =>{
    if(pacientes.length > 0) {
    console.log("nuevo paciente")
  }
}, [pacientes])
*/

  return (
    <div className="md:w-1/2 lg:w-3/5">
        {pacientes && pacientes.length ? (
            
          <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-xl mt-5 mb-7 text-center">
                Administra tus {" "}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
              <div className="md:h-screen overflow-y-scroll">

                {pacientes.map(paciente =>(
                    <Paciente
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}//le asignamos la funcion al props
                    />
                  )
                )}
                
              </div>  
          </>
        ): (
          <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-xl mt-5 mb-7 text-center">
                Comienza agregando pacientes {" "}
                <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
              </p>
          </>
        )}


      </div>
  )
}

export default ListadoPacientes
