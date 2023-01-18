const Paciente = () => {
  return (
    <div className="bg-white m-3 rounded-xl px-5 py-10 shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {" "}
          <span className="font-normal normal-case">Cardo</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Prpietario: {" "}
          <span className="font-normal normal-case">Agus</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {" "}
          <span className="font-normal normal-case">agustintrossero@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta: {" "}
          <span className="font-normal normal-case">9 Diciembre 2018</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {" "}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est vel labore repudiandae in quisquam eos recusandae reiciendis, eius architecto iste voluptatem neque quo beatae repellendus impedit saepe. Maxime, amet.</span>
        </p>
      </div>
  )
}

export default Paciente
