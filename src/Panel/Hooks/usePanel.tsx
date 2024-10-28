import { useEffect } from "react"
import { clienteAxios } from "../../config/axios"
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

interface props{
    middleware:string,
    url:string
}

const usePanel = ({middleware,url}:props) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
       //revalidar la informacion del usuario logeado

       const {data,error} = useSWR('/api/user',() => 
        clienteAxios('/api/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }))
    



    useEffect(()=>{
        if(middleware === 'guest' && url && data )
        {
            console.log(url,data)
            navigate(url);
        }
        //si el usuario no esta autenticado lo manda a iniciar session 
        if(middleware === 'auth' && error)
        {
            console.log(error)
            navigate('/')
        }
    },[data,error])

  return {
    data,
    error
  }
}

export default usePanel
