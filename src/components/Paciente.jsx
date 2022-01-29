const Paciente = ({paciente, setPacienteEdit, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;


  const handleElminarPaciente = () => {
    const respuesta = confirm("¿Estas seguro de eliminar este paciente?");

    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-5">

        <button 
        style={{background:'#3f51b5'}} 
        className="Buttom" 
        type="button"
        onClick={() => setPacienteEdit(paciente)}
        >Editar</button>

        <button 
        type="button" 
        style={{background: 'red'}}  
        className="Buttom"
        onClick={handleElminarPaciente}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
