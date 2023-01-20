import {useState} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    //creamos la funcion de eliminar pacientes
    const eliminarPaciente = (id) =>{
      //console.log("eliminado paciente", id)
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
      //console.log(pacientesActualizados) //filtra el objeto a los pacientes con id !== al seleccionado para eliminar dejando solo los pacientes que queremos que esten en el objeto
      setPacientes(pacientesActualizados) //actualizamos el objeto una vez eliminado el paciente
    }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente} //para conseguir la info del paciente que se quiere editar
        setPaciente={setPaciente} //para poder limpiar de consola el paciente anterior que fue editado
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}//mandamos la funcion por props
        />
      </div>
      
    </div>
  )
}

export default App
