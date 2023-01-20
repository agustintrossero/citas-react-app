const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  //console.log(paciente)

  const {nombre, propietario, email, fecha, sintomas, id} = paciente //agregamos el id, asi puede ser reconocido a la hora de eliminar

  const handleEliminar = ()=>{
    const respuesta = confirm("¿Deseas eliminar este paciente?")
    if(respuesta) {
      eliminarPaciente(id) 
    }
  }

  return (
    <div className="bg-white m-3 rounded-xl px-5 py-10 shadow-md mx-5 my-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {" "}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Prpietario: {" "}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {" "}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta: {" "}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {" "}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-md"
            type="button"
            onClick={() =>setPaciente(paciente)}
          > Editar
            
          </button>
          <button
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-md"
            type="button"
            onClick={handleEliminar}
          > Eliminar
            
          </button>
        </div>
      </div>
  )
}

export default Paciente
