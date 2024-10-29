import { useState } from "react";
import { Input } from "../../../componentsGlobal/Input";
import { clienteAxios } from "../../../config/axios";
import { toast } from "react-toastify";
import useSWR from "swr";
import spiner from '../../../assets/spiner.svg'
import { Motivos } from '../interface/MotivosInterface';

interface props {
  setNewMotivo:React.Dispatch<React.SetStateAction<boolean>>
}
export const MotivosList = ({setNewMotivo}:props) => {
  const token = localStorage.getItem('token');
  const [list,setlist] = useState(0)
  const [loading,setLoading] = useState(false)
  // inputs
  const [nombre,setNombre] = useState<string | number>('');


  const handleclickNewMotivo = async(e:React.FormEvent) =>
  {
    e.preventDefault()
    const datos ={
      nombre:nombre
    }
    try {
      setLoading(true)
      const {data} = await clienteAxios.post('/api/motivo/newmotivo',datos,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(data.succes)
      {
        toast.success('Se creo de forma correcta ')
        setlist(0)
        mutate()
      }
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  const deleteMotivo = async(id:number) =>{
    try {
      const data = {
        id:id
      }
      await  toast.promise(clienteAxios.post('/api/motivo/delete',data,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }),{
        error:'Se genero un error al eliminar, si tiene clientes que ya seleccionaron este motivo no se podra eliminar',
        pending:'Eliminando motivo',
        success:'Motivo eliminado'
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }
  const {data,isLoading,mutate} = useSWR('/api/motivo/all',()=>
  clienteAxios.get('/api/motivo/all',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }))
  const motivos:Motivos = data?.data
  return (
    <section className="w-full h-full md:w-1/4 bg-white p-2 flex flex-col gap-5">
      <div className="w-full flex flex-row justify-between">
        <button onClick={()=>setlist(list ? 0 : 1)} className="p-2 text-sm text-white bg-blue-500 hover:bg-blue-800 rounded-sm">
          {list ? 'Lista' :  'Nuevo motivo'}
        </button>
        <button onClick={()=>setNewMotivo(false)} className="p-2 text-sm text-white bg-red-500 hover:bg-red-800 rounded-sm">
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
                  Nombre
                  </th>
                  <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                   Eliminar
                  </th>
              </tr>
              </thead>
              <tbody>
                {motivos.succes.map((motivo,index)=>(
                  <tr key={index}> 
                    <td className="py-3 px-6 text-gray-700 border ">{motivo.id}</td>
                    <td className="py-3 px-6 text-gray-700 border ">{motivo.nombre}</td>
                    <td className="py-3 px-6 text-gray-700 border ">
                        <button onClick={()=>deleteMotivo(motivo.id)} className="w-8 h-8 rounded-full bg-red-500/30 hover:bg-red-500/70 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                    </td>

                  </tr>
                ))}
              </tbody>
          </table>
      :
      <form onSubmit={handleclickNewMotivo} className="w-full flex flex-col gap-3">
        <p className="text-xl font-bold text-slate-600">Crea un nuevo motivo de consulta</p>
        <Input nombre="nombre" type="text" setValue={setNombre} valueInput={nombre}/>
        {loading ? 
        
          <p>Creando motivo...</p>
        :
        
          <button className="p-2 text-sm bg-blue-500 text-white font-bold ">
            Crear nuevo motivo
          </button>
        
        }
      </form>
        }
    </section>
  );
};
