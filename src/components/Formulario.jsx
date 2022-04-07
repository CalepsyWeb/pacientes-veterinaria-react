import { useState, useEffect } from "react";
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const[error, setError] = useState (false);

  useEffect( () => {
    
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

    } 
  }, [paciente]);

  

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
        //alert('Hay un campo vacío')
        setError(true)
        return;
    } 
      setError(false)
      
      //objeto paciente

      const objetoPaciente ={
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      if(paciente.id) {
        // editando el registro
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );

        setPacientes(pacientesActualizados);
        setPaciente({});
      } else {
        //nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      // Reiniciar el form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center text-indigo-900 ">
        Seguimiento pacientes
      </h2>
      <p className="text-lg my-5 text-center font-bold text-indigo-600">
         { paciente.id ? "Editar Paciente" : "Añade Pacientes " }
      </p>
         
      <form
        onSubmit={handleSubmit}
        className=" shadow-xl bg-indigo-100 rounded-md py-10 px-5 mx-5 mb-20 sticky top-0"
      >
          {error && <Error><p>Todos los campos son obligatorios </p></Error> }
          
        <div className="my-3">
          <label
            htmlFor="nombre-mascota"
            className="text-slate-600 uppercase font-bold"
          >
            Mascota
          </label>
          <input
            id="nombre-mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-2 my-2 placeholder-slate-400 rounded-md outline-none"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label
            htmlFor="propietario"
            className="text-slate-600 uppercase font-bold"
          >
            Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="w-full p-2 my-2 placeholder-slate-400 rounded-md outline-none"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label htmlFor="email" className="text-slate-600 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del Propietario"
            className="w-full p-2 my-2 placeholder-slate-400 rounded-md outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label htmlFor="alta" className="text-slate-600 uppercase font-bold">
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Fecha de alta"
            className="w-full p-2 my-2 placeholder-slate-400 rounded-md outline-none"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label
            htmlFor="sintomas"
            className="text-slate-600 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="w-full p-2 my-2 placeholder-slate-400 rounded-md outline-none resize-none"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente" }
          className="bg-indigo-600 hover:bg-indigo-700 text-slate-50 font-bold w-full p-2 rounded-md cursor-pointer transition-all"
        />
      </form>
      
    </div>
  );
};

export default Formulario;
