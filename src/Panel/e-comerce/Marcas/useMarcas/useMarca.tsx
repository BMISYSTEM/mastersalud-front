import useSWR from 'swr'
import { clienteAxios } from '../../../../config/axios'
import { useState } from 'react'
import { Respuesta } from '../components/ModalUpdateMarca'

const useMarca = () => {
    const [marcaSelect,setMarcaSelect] = useState(0)
    const {data,error,isLoading,isValidating,mutate} = useSWR('/api/marcas/index',()=>
    clienteAxios.get('/api/marcas/index',{
        headers:{
            Authorization:`Bearer 2|sSrE8JpdOfrbrSppFU9CJVqYL6ECpxpiqfhufSPd60257f02`
        }
    }))

    const createMarca = async(datos,setRespuesta) =>{
        
        try {
            const {data} = await clienteAxios.post('/api/marcas/create',datos,{
                headers:{
                    Authorization:`Bearer 2|sSrE8JpdOfrbrSppFU9CJVqYL6ECpxpiqfhufSPd60257f02`
                }
            });
            setRespuesta(data)
        } catch (error) {
            console.log(error)
        }
    }

    const updateMarca = async(datos:{id:number,nombre:string}) =>{
            const {data} = await clienteAxios.post('/api/marcas/update',datos,{
                headers:{
                    Authorization:`Bearer 2|sSrE8JpdOfrbrSppFU9CJVqYL6ECpxpiqfhufSPd60257f02`
                }
            })
            console.log(data)
            mutate()
    }

    const findMarca = async(id:number|null,setRespuesta:React.Dispatch<React.SetStateAction<Respuesta | undefined>>) => {
        try {
            const {data} = await clienteAxios.post('/api/marcas/find',{id:id},{
                headers:{
                    Authorization:`Bearer 2|sSrE8JpdOfrbrSppFU9CJVqYL6ECpxpiqfhufSPd60257f02`
                }
            })
            setRespuesta(data)
        } catch (error) {
           console.log(error) 
        }
    }
  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
    createMarca,
    setMarcaSelect,
    marcaSelect,
    updateMarca,
    findMarca
  }
}

export default useMarca
