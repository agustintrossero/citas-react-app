import {useEffect, useState} from "react" 

const Formulario = () => {
  
  //definir el estado del componente con state
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    //validacion de formularios

    if([nombre, propietario,email,fecha,sintomas].includes("")){
      setError(true)
      } else {
      return setError(false)
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold"> Administralos </span>
      </p>

      
      <form 
      action="" 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && (
          <div className="bg-red-800 text-white text-center uppercase font-bold mb-3 p-3 rounded-md">
            <p>
              Todos los campos son obligatorios
            </p>
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} // es como el eventListener
            />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input 
              id="propietario"
              type="text"
              placeholder="Nombre de la Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input 
              id="email"
              type="email"
              placeholder="Email Contaccto Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400  rounded-md"
              placeholder="Describe los Sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase w-full p-3 cursor-pointer transition-colors rounded-md" 
          value="Agregar Paciente"
          />
      </form>
    </div>
  )
  }

export default Formulario
