import ReactModal from "react-modal";
import { MotivosList } from "./components/MotivosList";
import { useState } from "react";
import Horarios from "./components/Horarios";
import { InformacionPersonal } from "./components/InformacionPersonal";

export const HomeLayout = () => {
  const [newMotivo,setNewMotivo] = useState(false)
  const [horarios,setHorarios] = useState(false)
  const [informacion,setInformacion] = useState(false)

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
        <div className="w-full md:w-[24%] bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Clientes Atendidos</h2>
          <p className="text-3xl mt-2">150</p>
        </div>
        <div className="w-full md:w-[24%] bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Clientes Pendientes</h2>
          <p className="text-3xl mt-2">45</p>
        </div>
        <div className="w-full md:w-[24%] bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Citas Hoy</h2>
          <p className="text-3xl mt-2">8</p>
        </div>
        <div className="w-full md:w-[24%] bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Citas Mañana</h2>
          <p className="text-3xl mt-2">5</p>
        </div>
      </div>

      {/* Segunda fila: Calificación promedio y agenda */}
      <div className="flex flex-wrap  space-y-6 md:space-y-0 gap-2">
        <div className="w-full md:w-1/3 bg-indigo-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Calificación Promedio</h2>
          <p className="text-3xl mt-2">4.7</p>
        </div>
        <div className="w-full md:w-1/3 bg-teal-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Agenda Hoy</h2>
          <ul className="mt-2 space-y-2">
            <li>08:00 AM - 09:00 AM: Consulta con Juan Pérez</li>
            <li>10:00 AM - 11:00 AM: Consulta con María López</li>
            <li>12:00 PM - 01:00 PM: Revisión con Pedro Gómez</li>
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
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600">
              "Excelente servicio, muy satisfecho!"
            </p>
            <p className="text-gray-400 text-sm mt-2">- Juan Pérez</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600">
              "Muy buena atención, volveré pronto."
            </p>
            <p className="text-gray-400 text-sm mt-2">- María López</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600">
              "El médico fue muy amable y profesional."
            </p>
            <p className="text-gray-400 text-sm mt-2">- Pedro Gómez</p>
          </div>
          {/* Agrega más comentarios aquí */}
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
