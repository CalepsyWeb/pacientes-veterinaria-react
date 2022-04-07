//rfce - snippet función simple
//rafce - snippet función flecha

import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente}) {


  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-indigo-900 ">
            Listado Pacientes{" "}
          </h2>
          <p className="text-lg my-5 text-center font-bold text-indigo-600">
            Administra Pacientes y citas
          </p>

          {pacientes.map((paciente) => (
        <Paciente 
          key={paciente.id} 
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-indigo-900 ">
            No hay Pacientes{" "}
          </h2>
          <p className="text-lg my-5 text-center">
            Agrega tus {""}
            <span className="font-bold text-indigo-600 ">
              Pacientes
            </span>
          </p>
      
        </>
      )}

      
    </div>
  );
}

export default ListadoPacientes;
