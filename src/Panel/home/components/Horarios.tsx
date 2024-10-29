import React, { useState } from "react"
import { Input } from "../../../componentsGlobal/Input";
import spiner from '../../../assets/spiner.svg'
import { toast } from "react-toastify";
import { clienteAxios } from "../../../config/axios";
import useSWR from "swr";
import { HorariosI } from "../interface/HorariosInterface";

interface props {
  setHorario:React.Dispatch<React.SetStateAction<boolean>>
}
const Horarios = ({setHorario}:props) => {
  const token = localStorage.getItem('token');
  const [list,setlist] = useState(0)
  const [loading,setLoading] = useState(false)
  // inputs
  const [horai,setHorai] = useState<string| number>('')
  const [horaf,setHoraf] = useState<string| number>('')
  const [lunes,setLunes] = useState(false)
  const [martes,setmartes] = useState(false)
  const [miercoles,setmiercoles] = useState(false)
  const [jueves,setjueves] = useState(false)
  const [viernes,setviernes] = useState(false)
  const [sabado,setsabado] = useState(false)
  const [domingo,setdomingo] = useState(false)

  // crear horario
  const handleCreateHorario = async(e:React.FormEvent) =>{
    e.preventDefault()
    setLoading(true)
    const datos ={
      'hora_inicio':horai,
      'hora_fin':horaf,
      'lunes':lunes ? 1 : 0,
      'martes':martes ? 1 : 0,
      'miercoles':miercoles ? 1 : 0,
      'jueves':jueves ? 1 : 0,
      'viernes':viernes ? 1 : 0,
      'sabado':sabado ? 1 : 0,
      'domingo':domingo ? 1 : 0,
    }
    if(horai &&
      horaf && horai < horaf){
        const {data} = await clienteAxios.post('/api/horarios/newhorario',datos,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        if(data.succes)
        {
          mutate()
          setlist(0)
        }
      }else{
        toast.error('La hora inicio y fin deben ser digitadas o revise que la hora incio sea menor que la hora final')
      }
      setLoading(false)
  }

  const deleteHorario = async(id:number) =>{

      const datos = {
        id:id
      }
       await  toast.promise(clienteAxios.post('/api/horarios/delete',datos,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }),{
          error:'No se pudo eliminar ya que debe estar asociado algun cliente',
          pending:'Eliminando Horario',
          success:'Horario eliminado'
        })
      mutate()
  
  }


  const {data,isLoading,mutate} = useSWR('/api/horarios/all',()=>
  clienteAxios.get('/api/horarios/all',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }))
  const horario:HorariosI = data?.data;
  return (
    <section className="w-full md:w-auto h-full bg-white p-2">
        <div className="w-full flex flex-row justify-between p-2">
            <button onClick={()=>setlist(list ? 0 : 1)} className="p-2 text-sm text-white bg-blue-500 hover:bg-blue-800 rounded-sm">
              {list ? 'horarios' :  'Nuevo horario'}
            </button>
            <button onClick={()=>setHorario(false)} className="p-2 text-sm  bg-red-500 hover:bg-red-800 text-white hover:scale-105 transition-all rounded-sm">
                Cerrar
            </button>
        </div>
        {list === 0 ? 
        isLoading ? 
          <img src={spiner} alt="spiner" className="w-40 h-40" />
        :
          <table>
              <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                  {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_producto</th> */}
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                  Id
                  </th>
                  {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_promocion</th> */}
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                  Hora Inicio
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   Hora Final
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   L
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   Ma
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   M
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   J
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   V
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   S
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   D
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   Accion
                  </th>
              </tr>
              </thead>
              <tbody>
                {horario.succes.map((horario,index)=>(

                  <tr key={index}> 
                    <td className="py-3 px-6 text-gray-700 border ">{horario.id}</td>
                    <td className="py-3 px-6 text-gray-700 border ">{horario.hora_inicio}</td>
                    <td className="py-3 px-6 text-gray-700 border ">{horario.hora_fin}</td>
                    <td className="py-3 px-6 text-gray-700 border ">{
                    horario.lunes ? 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    }</td>
                    <td className="py-3 px-6 text-gray-700 border ">{
                    horario.martes? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    }</td>
                    <td className="py-3 px-6 text-gray-700 border ">{
                    horario.miercoles ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    }</td>
                    <td className="py-3 px-6 text-gray-700 border ">{horario.jueves ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  }</td>
                    <td className="py-3 px-6 text-gray-700 border ">{horario.viernes ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  }</td>
                    <td className="py-3 px-6 text-gray-700 border ">{horario.sabado ?
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg>
                   : 
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                   </svg>
                 }</td>
                    <td className="py-3 px-6 text-gray-700 border ">{horario.domingo ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  }</td>
                    <td className="w-full  flex justify-center items-center p-2">
                      <button onClick={()=>deleteHorario(horario.id)} className="hover:bg-red-500/50 text-white bg-red-500/80 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
      :
      <form onSubmit={handleCreateHorario} className="w-full flex flex-col gap-3">
        <p className="text-xl font-bold text-slate-600">Crea un horario</p>
        <Input nombre="Hora Inicio" type="time" setValue={setHorai} valueInput={horai}/>
        <Input nombre="Hora Final" type="time" setValue={setHoraf} valueInput={horaf}/>
        <div className="w-full flex flex-wrap gap-2 justify-center">
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>L</p>
              <input type="checkbox" checked={lunes} onChange={()=>setLunes(!lunes)} />
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>Ma</p>
              <input type="checkbox" checked={martes} onChange={()=>setmartes(!martes)} />
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>M</p>
              <input type="checkbox" checked={miercoles} onChange={()=>setmiercoles(!miercoles)} />
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>J</p>
              <input type="checkbox" checked={jueves} onChange={()=>setjueves(!jueves)} />
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>V</p>
              <input type="checkbox" checked={viernes} onChange={()=>setviernes(!viernes)} />
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>S</p>
              <input type="checkbox" checked={sabado} onChange={()=>setsabado(!sabado)} />
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-sm border p-2">
              <p>D</p>
              <input type="checkbox" checked={domingo} onChange={()=>setdomingo(!domingo)} />
            </div>
        </div>
        {loading ? 
        
          <p>Creando motivo...</p>
        :
        
          <button className="p-2 text-sm bg-blue-500 text-white font-bold ">
            Agregar horario de consulta
          </button>
        
        }
      </form>
        }
        
    </section>
  )
}

export default Horarios
