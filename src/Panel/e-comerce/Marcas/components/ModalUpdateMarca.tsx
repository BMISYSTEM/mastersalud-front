import React, { useEffect, useState } from 'react'
import useMarca from '../useMarcas/useMarca'
import { toast } from 'react-toastify'
// Generated by https://quicktype.io

export interface Respuesta {
    succes: Succes;
}

export interface Succes {
    id:         number;
    nombre:     string;
    created_at: Date;
    updated_at: Date;
}

const ModalUpdateMarca = ({id}:{id:number}) => {
    const {updateMarca,findMarca,mutate} = useMarca()
    const [respuesta,setRespuesta] = useState<Respuesta>()
    const [name,setName] = useState('')
    const [loading,setLoading] = useState(false)
    const handleclickUpdate = async(e:React.FormEvent) =>{
        e.preventDefault()
        const datos = {
            id:id,
            nombre:name
        }
        await toast.promise(updateMarca(datos),{
            error:'Se genero un error comuniquese con soporte',
            pending:'Actualizando la marca',
            success:'Marca actualizada con exito'
        })
        mutate()
    }
    useEffect(()=>{
        const consultarID = async() =>{
            setLoading(true)
            await findMarca(id,setRespuesta)
            setLoading(false)
        }
        consultarID()
    },[id])
    useEffect(() => {
        if (respuesta?.succes?.nombre) {
            setName(respuesta.succes.nombre); // Actualiza el nombre cuando respuesta cambie
        }
    }, [respuesta]);

  return (
    <form onSubmit={handleclickUpdate} className="space-y-4">
      <h2 className="text-2xl font-semibold">Actualizar Marca</h2>
      {loading ? <p>Cargando Datos de marca</p>    :
      
      <div>
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      
      
      }
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Actualizar Marca
      </button>
    </form>
  )
}

export default ModalUpdateMarca
