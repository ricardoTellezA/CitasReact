import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLC = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLC);
    };

    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const eliminarPaciente = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(eliminarPaciente);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteEdit={pacienteEdit}
          setPacienteEdit={setPacienteEdit}
        />
        <ListadoPacientes
          setPacienteEdit={setPacienteEdit}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
