import ReactModal from "react-modal";
import { MotivosList } from "./components/MotivosList";
import { useEffect, useState } from "react";
import Horarios from "./components/Horarios";
import { InformacionPersonal } from "./components/InformacionPersonal";
import useSWR from "swr";
import { clienteAxios } from "../../config/axios";
import { AllMedicInterface } from "./interface/medicInterface";

export const HomeLayout = () => {
  const token = localStorage.getItem('token');
  const [newMotivo,setNewMotivo] = useState(false)
  const [horarios,setHorarios] = useState(false)
  const [informacion,setInformacion] = useState(false)
  const [listado,setListado] = useState(1);
  const {data,isLoading,mutate} = useSWR('/api/medic/all/private',()=>
  clienteAxios.get('/api/medic/all/private',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }))
  const medic: AllMedicInterface = data?.data;
  const atendidos = medic?.citas.filter(citas=>citas.atendido === 1);
  const pendientes = medic?.citas.filter(citas=>citas.atendido === 0);
  const citasHoy = medic?.citas?.filter((cita)=>{
    const fecha = new Date(); // O cualquier otra fecha
    const dia = String(fecha.getDate()).padStart(2, '0'); // Obtener el día y agregar ceros a la izquierda
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Obtener el mes (0-indexado)
    const año = fecha.getFullYear(); // Obtener el año
    
    const fechaFormateada = `${año}-${dia}-${mes}`;
    if(cita.fecha_cita.toString() === fechaFormateada){
      return cita
    }
  })
  const citasMañana = medic?.citas?.filter((cita)=>{
    const fecha = new Date(); // O cualquier otra fecha
    const dia = String(fecha.getDate() + 1).padStart(2, '0'); // Obtener el día y agregar ceros a la izquierda
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Obtener el mes (0-indexado)
    const año = fecha.getFullYear(); // Obtener el año
    
    const fechaFormateada = `${año}-${dia}-${mes}`;
    if(cita.fecha_cita.toString() === fechaFormateada){
      return cita
    }
  })

  const formaterFecha = (fechas = new Date) =>{
    const fecha = new Date(fechas); // O cualquier otra fecha
    const dia = String(fecha.getDate() + 1).padStart(2, '0'); // Obtener el día y agregar ceros a la izquierda
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Obtener el mes (0-indexado)
    const año = fecha.getFullYear(); // Obtener el año
    
    return  `${año}-${dia}-${mes}`;
  }


  const atendido = (id:number)=>{

  }

  const eliminar = (id:number) =>{

  }
  return (
    <div className="p-6 flex flex-col gap-4 space-y-6 w-full ">
      <div className="flex flex-wrap  w-full gap-2 justify-start  ">
        <button onClick={()=>setNewMotivo(true)} className="w-auto  bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-800">
          <h2 className="text-sm font-bold">Listado de Motivos</h2>
        </button>
        <button onClick={()=>setHorarios(true)} className="w-auto  bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-800">
          <h2 className="text-sm font-bold">Definir Horarios de atencion</h2>
        </button>
        <button onClick={()=>setInformacion(true)} className="w-auto  bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-800">
          <h2 className="text-sm font-bold">Informacion Personal</h2>
        </button>
      </div>
      {/* Primera fila: Resumen de información */}
      <div className="flex flex-wrap  w-full gap-2 justify-between  ">
        <button onClick={()=>setListado(1)} className="w-full md:w-[24%] bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Clientes Atendidos</h2>
          <p className="text-3xl mt-2">{medic?.resumen?.[0].atendidos}</p>
        </button>
        <button onClick={()=>setListado(2)}  className="w-full md:w-[24%] bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Clientes Pendientes</h2>
          <p className="text-3xl mt-2">{medic?.resumen?.[0].pendientes}</p>
        </button>
        <button onClick={()=>setListado(3)}  className="w-full md:w-[24%] bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Citas Hoy</h2>
          <p className="text-3xl mt-2">{citasHoy?.length}</p>
        </button>
        <button onClick={()=>setListado(4)}  className="w-full md:w-[24%] bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Citas Mañana</h2>
          <p className="text-3xl mt-2">{citasMañana?.length}</p>
        </button>
      </div>
      <h1 className="text-2xl font-bold text-slate-500 font-serif">{listado === 1 ? 'Atendidos' : listado === 2 ? 'Pendientes' : listado === 3 ? 'Para hoy' : listado === 4 ? 'Para mañana' : null}</h1>
      <table>
        <thead>
          <tr className="bg-slate-300 ">
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Telefono</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Motivo</th>
            <th className="p-2 border">Observacion</th>
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Hora Inicio</th>
            <th className="p-2 border">Hora Fin</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {    
          listado === 1 ? 
            atendidos?.map((cita,index)=>{
                return (
                  <tr key={index}>
                    <td className="text-center border">{cita.nombre}</td>
                    <td className="text-center border">{cita.telefono}</td>
                    <td className="text-center border">{cita.email}</td>
                    <td className="text-center border">{cita.motivo}</td>
                    <td className="text-center border">{cita.observacion}</td>
                    <td className="text-center border">{formaterFecha(cita.fecha_cita)}</td>
                    <td className="text-center border">{cita.hora_inicio}</td>
                    <td className="text-center border">{cita.hora_fin}</td>
                    <td>
                      <button onClick={()=>atendido(cita.id)} className="text-xs p-1 bg-green-500 text-white hover:bg-green-800 transition-all">
                        Atendido
                      </button>
                      <button onClick={()=>eliminar(cita.id)} className="text-xs p-1 bg-red-500 text-white hover:bg-red-800 transition-all">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                )
            })
          : listado === 2 ? 
              pendientes?.map((cita,index)=>{
                return (
                  <tr key={index}>
                    <td className="text-center border">{cita.nombre}</td>
                    <td className="text-center border">{cita.telefono}</td>
                    <td className="text-center border">{cita.email}</td>
                    <td className="text-center border">{cita.motivo}</td>
                    <td className="text-center border">{cita.observacion}</td>
                    <td className="text-center border">{formaterFecha(cita.fecha_cita)}</td>
                    <td className="text-center border">{cita.hora_inicio}</td>
                    <td className="text-center border">{cita.hora_fin}</td>
                    <td>
                    <button onClick={()=>atendido(cita.id)} className="text-xs p-1 bg-green-500 text-white hover:bg-green-800 transition-all">
                        Atendido
                      </button>
                      <button onClick={()=>eliminar(cita.id)} className="text-xs p-1 bg-red-500 text-white hover:bg-red-800 transition-all">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                )
            })
            : listado === 3 ?
            citasHoy?.map((cita,index)=>{
              return (
                <tr key={index}>
                  <td className="text-center border">{cita.nombre}</td>
                  <td className="text-center border">{cita.telefono}</td>
                  <td className="text-center border">{cita.email}</td>
                  <td className="text-center border">{cita.motivo}</td>
                  <td className="text-center border">{cita.observacion}</td>
                  <td className="text-center border">{formaterFecha(cita.fecha_cita)}</td>
                  <td className="text-center border">{cita.hora_inicio}</td>
                  <td className="text-center border">{cita.hora_fin}</td>
                  <td>
                  <button onClick={()=>atendido(cita.id)} className="text-xs p-1 bg-green-500 text-white hover:bg-green-800 transition-all">
                        Atendido
                      </button>
                      <button onClick={()=>eliminar(cita.id)} className="text-xs p-1 bg-red-500 text-white hover:bg-red-800 transition-all">
                        Eliminar
                      </button>
                  </td>
                </tr>
              )
          }) : listado === 4 ?
              citasMañana?.map((cita,index)=>{
                return (
                  <tr key={index}>
                    <td className="text-center border">{cita.nombre}</td>
                    <td className="text-center border">{cita.telefono}</td>
                    <td className="text-center border">{cita.email}</td>
                    <td className="text-center border">{cita.motivo}</td>
                    <td className="text-center border">{cita.observacion}</td>
                    <td className="text-center border">{formaterFecha(cita.fecha_cita)}</td>
                    <td className="text-center border">{cita.hora_inicio}</td>
                    <td className="text-center border">{cita.hora_fin}</td>
                    <td>
                    <button onClick={()=>atendido(cita.id)} className="text-xs p-1 bg-green-500 text-white hover:bg-green-800 transition-all">
                        Atendido
                      </button>
                      <button onClick={()=>eliminar(cita.id)} className="text-xs p-1 bg-red-500 text-white hover:bg-red-800 transition-all">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                )
            })
            : null
          }
        </tbody>
      </table>
      {/* Segunda fila: Calificación promedio y agenda */}
      <div className="flex flex-wrap  space-y-6 md:space-y-0 gap-2">
        <div className="w-full md:w-1/3 bg-indigo-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Calificación Promedio</h2>
          <p className="text-4xl mt-2">{Math.round(Number(medic?.calificacion?.[0].promedio))}</p>
        </div>
        <div className="w-full md:w-1/3 bg-teal-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Agenda Hoy</h2>
          <ul className="mt-2 space-y-2">
            {medic?.citas?.map((cita,index)=>{
              const fecha = new Date(); // O cualquier otra fecha
              const dia = String(fecha.getDate()).padStart(2, '0'); // Obtener el día y agregar ceros a la izquierda
              const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Obtener el mes (0-indexado)
              const año = fecha.getFullYear(); // Obtener el año
              
              const fechaFormateada = `${año}-${dia}-${mes}`;
              if(cita.fecha_cita.toString() === fechaFormateada){
                return <li key={index}>{cita.hora_inicio} {cita.hora_fin}: Consulta con {cita.nombre}</li>
              }
            })}
            {/* Agrega más citas aquí */}
          </ul>
        </div>
      </div>

      {/* Tercera fila: Comentarios de clientes */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        
        <h2 className="text-xl font-bold text-gray-700">
          Comentarios de Clientes Atendidos
        </h2>
        <div className="mt-4 space-y-4">
          {medic?.comentarios?.map((coment,index)=>(
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600">
                "{coment.observacion}"
              </p>
              <p className="text-gray-400 text-sm mt-2">Cliente {coment.nombre}</p>
              <p className="text-gray-400 text-sm mt-2">creado el {coment.created_at}</p>
              <p className="text-gray-400 text-sm mt-2">Puntaje {coment.calificacion}</p>
            </div>
          ))}
          
        </div>
      </div>


      {/* modales */}
      <ReactModal isOpen={newMotivo} className={'w-full h-full flex justify-center items-center backdrop-blur-lg bg-sky-500/20'}>
        <MotivosList  setNewMotivo={setNewMotivo}/>
      </ReactModal>
      <ReactModal isOpen={horarios} className={'w-full h-full flex justify-center items-center backdrop-blur-lg bg-sky-500/20'}>
        <Horarios setHorario={setHorarios}/>
      </ReactModal>
      <ReactModal isOpen={informacion} className={'w-full h-full flex justify-center items-center backdrop-blur-lg bg-sky-500/20'}>
        <InformacionPersonal setInformacion={setInformacion}/>
      </ReactModal>
    </div>
  );
};
