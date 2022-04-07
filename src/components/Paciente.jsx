import swal from 'sweetalert';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = swal("¿Deseas eliminar este paciente?", {
      buttons: ["¡Oh no!", "Si quiero eliminarlo"],
    });
    if (respuesta) {
      eliminarPaciente(id);
    }
  }
  return (
    <div className="shadow-xl bg-indigo-100 rounded-md py-10 px-5 mx-5 mb-10">
        
      <p className="text-slate-600 uppercase font-bold py-3">
        Nombre Mascota:{" "}
        <span className="text-slate-600 normal-case font-normal">{nombre}</span>
      </p>
      <p className="text-slate-600 uppercase font-bold py-3">
        Nombre Propietario:{" "}
        <span className="text-slate-600 normal-case font-normal">{propietario}</span>
      </p>
      <p className="text-slate-600 uppercase font-bold py-3">
        Email:{" "}
        <span className="text-slate-600 normal-case font-normal">{email}</span>
      </p>
      <p className="text-slate-600 uppercase font-bold py-3">
        Fecha alta:{" "}
        <span className="text-slate-600 normal-case font-normal">
        {fecha}
        </span>
      </p>
      <p className="text-slate-600 uppercase font-bold py-3">
        Síntomas:{" "}
        <span className="text-slate-600 normal-case font-normal">
        {sintomas}
        </span>
      </p>
      <div className="flex ">
        <button
        type="button"
        className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold mr-3 my-2 p-2 rounded-md cursor-pointer transition-all"
        onClick={() => setPaciente(paciente)}
        > Editar </button>
        <button
        type="button"
        className="bg-rose-600 hover:bg-rose-700 text-slate-50 font-bold mr-3 my-2 p-2 rounded-md cursor-pointer transition-all"
        onClick={handleEliminar}
        > Eliminar </button>
      </div>
    </div>
  );
};

export default Paciente;
