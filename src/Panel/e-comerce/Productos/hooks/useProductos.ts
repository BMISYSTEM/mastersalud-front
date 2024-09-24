import useSWR from "swr"
import { clienteAxios } from "../../../../config/axios"

const useProductos = () => {
    const token = localStorage.getItem('token')




    const {data,error,isLoading,mutate} = useSWR('/api/producto/index',()=>
    clienteAxios.get('/api/producto/index',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    const createProducto = async (datos) =>{
        const {data} = await  clienteAxios.post('/api/producto/create',datos,{
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
  }
}

export default useProductos
