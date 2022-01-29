import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes,setPacienteEdit, eliminarPaciente }) => {


  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} 
            setPacienteEdit={setPacienteEdit}
            paciente={paciente} 
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
           No hay Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tus pacientes{""}
            <span className="text-indigo-600 font-bold"> y aparecerán aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
