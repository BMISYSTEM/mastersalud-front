import useSWR from "swr"
import { clienteAxios } from "../../../../config/axios"
import { Succe } from "../productosLayout"

const useProductos = () => {
    const token = localStorage.getItem('token')




    const {data,error,isLoading,mutate} = useSWR('/api/producto/index',()=>
    clienteAxios.get('/api/producto/index',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    const createProducto = async (datos) =>{
        await  clienteAxios.post('/api/producto/create',datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        mutate()
    }

    const updateImagen = async(datos) =>{
       await clienteAxios.post('/api/producto/update-image',datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        mutate()
    }

    const updateEstado = async(datos:Succe) =>{
        await clienteAxios.post('/api/producto/update',datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        mutate()
    }
  return {
    createProducto,
    data,
    error,
    isLoading,
    updateImagen,
    updateEstado
  }
}

export default useProductos
