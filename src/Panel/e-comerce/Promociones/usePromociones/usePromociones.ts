import useSWR from "swr"
import { clienteAxios } from "../../../../config/axios"
import React from 'react';
import { FindPromocion } from "../components/ModalUpdatePromociones";

interface producto {
  nombre:string,
  porcentaje:number,
  activo:number
}
interface updateProducto {
  id:number
  nombre:string,
  porcentaje:number,
  activo:number
}

const usePromociones = () => {
  const token = localStorage.getItem('token')
  const {data,error,isLoading,isValidating,mutate} = useSWR('/api/promocion/index',()=>
    clienteAxios.get('/api/promocion/index',{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }))

    const createPromo = async(datos:producto) => 
    {
      const {data} = await clienteAxios.post('/api/promocion/create',datos,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(data)
    }

    const deletePromo = async(datos:{id:number}) =>{
      const {data} = await clienteAxios.post('/api/promocion/delete',datos,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      mutate()
    }

    const findPromocion = async(id:number,setRespuesta:React.Dispatch<React.SetStateAction<FindPromocion | undefined>>) =>{
      const datos = {
        id:id
      }
      const {data} = await clienteAxios.post('/api/promocion/find',datos,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setRespuesta(data);
    }

    const updatePromociones = async(datos:updateProducto) =>
    {
      const {data} = await clienteAxios.post('api/promocion/update',datos,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      mutate()
    }
  return {
    data,error,isLoading,isValidating,mutate,
    createPromo,
    deletePromo,
    findPromocion,
    updatePromociones
  }
}

export default usePromociones
