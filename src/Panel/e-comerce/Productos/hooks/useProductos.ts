import useSWR from "swr"
import { clienteAxios } from "../../../../config/axios"
export interface Succe {
    id:               number;
    nombre:           string;
    id_marca:         number;
    nombre_marca:     string;
    id_promocion:     number;
    nombre_promocion: string;
    precio:           number;
    estado:           string;
    porcentaje:       number;
    imagen1:          string;
    imagen2:          string;
    imagen3:          string;
    imagen4:          string;
  }

const useProductos = () => {
    const token = localStorage.getItem('token')




    const {data,error,isLoading,mutate} = useSWR('/api/producto/index',()=>
    clienteAxios.get('/api/producto/index',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    const createProducto = async (datos:any) =>{
        await  clienteAxios.post('/api/producto/create',datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        mutate()
    }

    const updateImagen = async(datos:any) =>{
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
