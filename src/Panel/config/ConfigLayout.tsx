import React, { useState } from "react"
import { Input } from "../../componentsGlobal/Input"
import { toast, ToastContainer } from "react-toastify"
import { clienteAxios } from "../../config/axios"
import useSWR from "swr"
import { Especialidad, Succe } from "./interfaces/especialidadesInterface"


export const ConfigLayout = () => {
  return (
    <>
    <section className="w-full flex flex-col gap-2 p-2 border">
        <p className="text-xl font-bold">Especialidades</p>
        <Especialidades/>
        <p className="text-xl font-bold">Medicos</p>
        <Medicos/>
    </section>
    <ToastContainer/>
    </>
  )
}


const Especialidades = () =>{
    const [nombre,setNombre] = useState<string | number>('');
    const {data,isLoading,mutate} = useSWR('/api/especialidades/all',()=>
    clienteAxios.get('/api/especialidades/all'));
    const createEspecialidad = async (e:React.FormEvent) =>{
        e.preventDefault()
        if(!nombre)
        {
            toast.error('Falta el nombre de la especialidad');
            return
        }
        const data = {
            'nombre':nombre
        }
        await toast.promise(
            clienteAxios.post('/api/especialidad/create',data,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
        ,
        {
            error:'Se genero un error inesperado',
            pending:'Creando la especialidad',
            success:'Se creo de forma correcta '
        }
        )
        mutate();
    }
    const deleteEspecialidad = async(id:number) =>{
        const data ={
            id:id
        }
        await toast.promise(
            clienteAxios.post('/api/especialidad/delete',data,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            ,
            {
                error:'Se genero un error inesperado',
                pending:'Eliminando la especialidad',
                success:'Se Elimino de forma correcta '
            }
        )
        mutate()
    }
    const updateEspecialidad = async(especi:Succe) =>{
        await toast.promise(
            clienteAxios.post('/api/especialidad/update',especi,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            ,
            {
                error:'Se genero un error inesperado',
                pending:'Actualizando la especialidad',
                success:'Se actualizo de forma correcta '
            }
        )
        mutate()
    }
    const especi:Especialidad = data?.data;
    
    return (
        <>
            <form onSubmit={createEspecialidad} className="w-full flex flex-row gap-2">
                <button className="bg-green-500 w-20 px-2 py-1 rounded-xl text-white">
                    Nuevo +
                </button>
                <div>
                    <Input nombre="Especialidad" type="text" valueInput={nombre} setValue={setNombre} />
                </div>
            </form>
            <table>
                <thead className="border p-1 bg-blue-500 text-white">
                    <th className="text-left">Nombre</th>
                    <th className="text-left">Opciones</th>
                </thead>
                <tbody className="">
                    {especi?.succes?.map((espe,index)=>(
                        <tr>
                            <td className="border bg-slate-300" contentEditable={true} onBlur={(e)=>{

                                    e.target.textContent ? updateEspecialidad({...espe,nombre:e.target.textContent}) : toast.warning('No hay texto, no se actualizara ')
                                }
                                }
                                >{espe.nombre}</td>
                            <td className="border">
                                <button onClick={()=>deleteEspecialidad(espe.id)} className="text-white bg-red-500 p-2">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export interface allMedic {
    succes:   detalle[];
  }
  export interface detalle {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    password:          string;
    remember_token:    null;
    created_at:        Date;
    updated_at:        Date;
    rol:               number;
    nombre:            null;
    apellido:          string;
    cedula:            string;
    fijo:              string;
    celular:           string;
    direccion:         string;
    cargo:             string;
    horarioatencion:   string;
    publico:           string;
    mediospago:        string;
    fotoperfil:        string;
    foto1:             string;
    foto2:             string;
    foto3:             null;
    foto4:             null;
    foto5:             null;
    foto6:             null;
    foto7:             null;
    foto8:             null;
    activo:            number;
    ciudad:           string;
    presencial:       number;
    virtual:          number;
  }
const Medicos = () =>{

    const {data,isLoading,mutate} = useSWR('/api/medic/all',()=>
    clienteAxios.get('/api/medic/all'))

    const updateactivo = async(medic:detalle) => {

        await toast.promise(
            clienteAxios.post('/api/users/update',medic,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }),
            {
                error:'Se genero un error inesperado',
                pending:'Cambiando el estado de activacion',
                success:'Se actualizo el estado'
            }
        )
        mutate()
    }

    const medic:allMedic = data?.data;
    return (
        <table>
            <thead>
                <th>Nombre</th>
                <th>apellido</th>
                <th>cedula/nit</th>
                <th>telefono</th>
                <th>email</th>
                <th>especialidad</th>
                <th>direccion</th>
                <th>activo</th>
                <th>opciones</th>
            </thead>
            <tbody>
                {medic?.succes?.map((medic,index)=>(
                    <tr>
                        <td className="border text-sm px-2 py-1">{medic.name}</td>
                        <td className="border text-sm px-2 py-1">{medic.apellido}</td>
                        <td className="border text-sm px-2 py-1">{medic.cedula}</td>
                        <td className="border text-sm px-2 py-1">{medic.celular}</td>
                        <td className="border text-sm px-2 py-1">{medic.email}</td>
                        <td className="border text-sm px-2 py-1">{medic.cargo}</td>
                        <td className="border text-sm px-2 py-1">{medic.direccion}</td>
                        <td className="border text-sm px-2 py-1">{medic.activo}</td>
                        <td className="border text-sm px-2 py-1">
                            <button 
                            onClick={()=>updateactivo({...medic,activo:medic.activo ? 0 : 1})}
                            className={`${medic.activo ? 'bg-red-500' : 'bg-blue-500'} text-white px-2 py-1`}>
                                {medic.activo ? 'Inactivar' : 'Activar'}
                            </button>
                            <button className="bg-amber-500 text-white px-2 py-1">
                                Destacar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}