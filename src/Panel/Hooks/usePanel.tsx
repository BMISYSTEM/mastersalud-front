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

       const {data:user,error} = useSWR('/api/user',() => 
        clienteAxios('/api/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
        );




    useEffect(()=>{
        if(middleware === 'guest' && url && user )
        {
            console.log(url,user)
            navigate(url);
        }
        //si el usuario no esta autenticado lo manda a iniciar session 
        if(middleware === 'auth' && error)
        {
            console.log(error)
            navigate('/')
        }
    },[user,error])

  return {
    user,
    error
  }
}

export default usePanel
