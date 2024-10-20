import useSWR from "swr";
import { clienteAxios } from "../../../../config/axios"

export const usePedidos = () => {
    const token = localStorage.getItem('token');


    const {data:index,isLoading,mutate} = useSWR('api/ventas/index',()=>
    clienteAxios.get('api/ventas/index',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))


    const indexProductos = async(datos:any,setPedidos:any) =>{
        const {data} = await clienteAxios.post('api/ventas/index/productos',datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setPedidos(data)
    }

    const updateEstatus = async(datos:any) =>
    {
        const {} = await clienteAxios.post('api/ventas/update/status',datos,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }
  return {
    index,isLoading,mutate,
    indexProductos,
    updateEstatus
  }
}
