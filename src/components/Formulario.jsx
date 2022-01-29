import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, pacienteEdit, setPacienteEdit }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropetario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteEdit).length > 0) {
      setNombre(pacienteEdit.nombre);
      setPropetario(pacienteEdit.propietario);
      setEmail(pacienteEdit.email);
      setFecha(pacienteEdit.fecha);
      setSintomas(pacienteEdit.sintomas);
    }
  }, [pacienteEdit]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fechaId = Date.now().toString(36);
    return random + fechaId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDAR FORMULARIO
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //objeto de pacienmtes

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (pacienteEdit.id) {
      //EDITANDO REGISTRO
      objetoPaciente.id = pacienteEdit.id;

      const pacienteActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacienteActualizado);

      setPacienteEdit({});
    } else {
      //AGREGANDO NUEVO REGISTRO
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reniciar el formulario
    setNombre("");
    setPropetario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 mt-2 border-gray-400 p-2 w-full placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            value={propietario}
            type="text"
            placeholder="Nombre de la propietario"
            className="border-2 mt-2 border-gray-400 p-2 w-full placeholder-gray-400 rounded-md"
            onChange={(e) => setPropetario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo Electronico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Email de contacto"
            className="border-2 mt-2 border-gray-400 p-2 w-full placeholder-gray-400 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            value={fecha}
            className="border-2 mt-2 border-gray-400 p-2 w-full placeholder-gray-400 rounded-md"
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            value={sintomas}
            className="border-2 mt-2 border-gray-400 p-2 w-full placeholder-gray-400 rounded-md"
            placeholder="Escribe los sintomas"
            id="sintomas"
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          style={{ backgroundColor: "#3f51b5" }}
          type="submit"
          className="p-3 cursor-pointer text-white uppercase font-bold w-full
           hover:bg-indigo-700"
          value={`${
            Object.keys(pacienteEdit).length > 0 ? "Editar" : "Agregar"
          }`}
        />
      </form>
    </div>
  );
};

export default Formulario;
