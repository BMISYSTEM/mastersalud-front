import useSWR from 'swr';
import { clienteAxios } from '../../../config/axios';
import spiner from '../../../assets/spiner.svg'
import fondo from './assets/fondo.webp'
import { PhotoIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Input } from '../../../componentsGlobal/Input';
import { Especialidad } from '../../config/interfaces/especialidadesInterface';
interface props {
  setInformacion: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Users {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: string;
    created_at:        Date;
    updated_at:        Date;
    rol:               number;
    nombre:            string;
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
    foto3:             string;
    foto4:             string;
    foto5:             string;
    foto6:             string;
    foto7:             string;
    foto8:             string;
    activo:            number;
    ciudad:            string;
    presencial:        boolean;
    virtual:           boolean;
}
const cities = [
    "Bogotá",
    "Medellín",
    "Cali",
    "Barranquilla",
    "Cartagena",
    "Bucaramanga",
    "Manizales",
    "Pereira",
    "Santa Marta",
    "Cúcuta",
    "Ibagué",
    "Villavicencio",
    "Neiva",
    "Armenia",
    "Montería",
    "Popayán",
    "Sincelejo",
    "Riohacha",
    "Tunja",
    "Valledupar",
  ];
export const InformacionPersonal = ({ setInformacion }: props) => {
    const token = localStorage.getItem('token')
    const baseUrl = import.meta.env.VITE_URL_API;
    /* campos input */
    const [nombre,setNombre] = useState<string | number>('')
    const [apellido,setApellidoe] = useState<string | number>('')
    const [cedula,setCedula] = useState<string | number>('')
    const [email,setEmail] = useState<string | number>('')
    const [fijo,setFijo] = useState<string | number>('')
    const [celular,setCelular] = useState<string | number>('')
    const [cargo,setCargo] = useState<string | number>('')
    const [horario,setHorario] = useState<string | number>('')
    const [publico,setPublico] = useState<string | number>('')
    const [medio,setMedio] = useState<string | number>('')
    const [direccion,setDireccion] = useState<string | number>('')
    const [ciudad,setCiudad] = useState<string | number>('')
    const [virtual,setVirtual] = useState<boolean>(false)
    const [presencial,setPresencial] = useState<boolean>(false)
    const [cargando,setCargando] = useState<boolean>(false)

    const {data,isLoading,mutate} = useSWR('/api/users',()=>
    clienteAxios.get('/api/users',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    const user:Users = data?.data;
    const { data:especialidades } = useSWR("/api/especialidades/all", () =>
        clienteAxios.get("/api/especialidades/all")
      );

    const especi: Especialidad = especialidades?.data

    const updateUser = async() =>{
        const datos = {
            ...user,
            nombre:nombre,
            apellido:apellido,
            cedula:cedula,
            email:email,
            fijo:fijo,
            celular:celular,
            cargo:cargo,
            horarioatencion:horario,
            publico:publico,
            mediospago:medio,
            ciudad:ciudad,
            direccion:direccion,
            virtual:virtual ? 1 : 0 ,
            presencial:presencial ? 1 : 0 
        }
        setCargando(true)
        await toast.promise(
            clienteAxios.post('/api/users/update',datos,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }),
            {
                error:'Error al actualizar la informacion ',
                pending:'actualizando...',
                success:'Se actualizo la informacion'
            }
        )
        await mutate()
        setCargando(false)
    }

    const handleChange = async(
        event: React.ChangeEvent<HTMLInputElement>,
        imagen: number
      ) => {
        if (event?.target?.files) {
          const files = event?.target?.files[0];
          const datos = new FormData();
          datos.append("imagen", imagen.toString());
          datos.append("file", files);
          await toast.promise(
            clienteAxios.post('/api/users/update/imagen',datos,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            , {
            error: "se genero un error al actualizar, comuniquese con soporte",
            pending: "Actualizando la imagen",
            success: "La imagen se actualizo con exito",
          });
          mutate()
        }
      };
    useEffect(()=>{
        setNombre(user?.name)
        setApellidoe(user?.apellido)
        setCedula(user?.cedula)
        setEmail(user?.email)
        setFijo(user?.fijo)
        setCelular(user?.celular)
        setCargo(user?.cargo)
        setHorario(user?.horarioatencion)
        setPublico(user?.publico)
        setMedio(user?.mediospago)
        setDireccion(user?.direccion)
        setCiudad(user?.ciudad)
        setVirtual(user?.virtual)
        setPresencial(user?.presencial)
    },[data])

  return (
    <section className="w-full md:w-1/3 h-full bg-white p-2 overflow-auto">
      <div className="w-full flex flex-row justify-end p-2">
        <button
          onClick={() => setInformacion(false)}
          className="p-2 text-sm  bg-red-500 hover:bg-red-800 text-white hover:scale-105 transition-all rounded-sm"
        >
          Cerrar
        </button>
      </div>

        {isLoading ? 
            <img src={spiner} alt="" className='w-32 h-32'/>
        :
            <div className="w-full flex flex-col gap-2 p-2">
                <div className='w-40 h-40 rounded-full bg-slate-400 overflow-hidden'>
                    <img src={user?.fotoperfil ? `${baseUrl}/storage/${user?.fotoperfil}` :  fondo} alt="" className='w-full h-full object-contain' />
                </div>
                <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                <div className='mb-2 w-full'>
                    {cargando === false ?
                        <button onClick={()=>updateUser()} className='w-full p-2 bg-green-500 text-white rounded-sm'>
                            Guardar
                        </button>
                    :
                    <p>Guardando informacion....</p>
                    }
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Nombre' valueInput={nombre} setValue={setNombre} type='text'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Apellido' valueInput={apellido} setValue={setApellidoe} type='text' />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                   <Input nombre='cedula' setValue={setCedula} valueInput={cedula} type='number'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Email' setValue={setEmail} valueInput={email} type='email'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Fijo' setValue={setFijo} valueInput={fijo} type='number'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Celular' setValue={setCelular} valueInput={celular} type='number'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <label htmlFor="">Especialidad</label>
                    <select name="" id="" onChange={(e)=>setCargo(e.target.value)} className='w-full p-3 border border-blue-500'>
                        {especi.succes.map((especi,index)=>(
                            <option key={index} value={especi.nombre} selected={especi.nombre === user.cargo ? true : false}>{especi.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Horario de atencion' setValue={setHorario} valueInput={horario} type='text'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Publico de atencion' setValue={setPublico} valueInput={publico} type='text'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Medios de pago' setValue={setMedio} valueInput={medio} type='text'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <Input nombre='Direccion' setValue={setDireccion} valueInput={direccion} type='text'/>
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <label htmlFor="">Ciudad</label>
                    <select name="" id="" onChange={(e)=>setCiudad(e.target.value)} className='w-full p-3 border border-blue-500'>
                        {cities.map((citi,index)=>(
                            <option key={index} value={citi} selected={citi === user.ciudad ? true : false}>{citi}</option>
                        ))}
                    </select>   
                </div>
                <div className=' flex flex-row gap-2 items-center '>
                    <label htmlFor="">Presencial</label>
                    <input type="checkbox" checked={presencial} onChange={(e)=>setPresencial(e.target.checked)}/> 
                </div>
                <div className=' flex flex-row gap-2 items-center '>
                    <label htmlFor="">Virtual</label>
                    <input type="checkbox" checked={virtual} onChange={(e)=>setVirtual(e.target.checked)} /> 
                </div>
                <div className='w-full flex flex-wrap gap-2'>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto1 ?  `${baseUrl}/storage/${user?.foto1}` : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 2)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto2 ?  `${baseUrl}/storage/${user?.foto2}` : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 3)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto3 ?  `${baseUrl}/storage/${user?.foto3}` : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 4)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto4 ?  `${baseUrl}/storage/${user?.foto4}` : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 5)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto5 ?  `${baseUrl}/storage/${user?.foto5}`: fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 6)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto6 ?  `${baseUrl}/storage/${user?.foto6}` : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 7)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto7 ?  `${baseUrl}/storage/${user?.foto7}` : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 8)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto8 ?  `${baseUrl}/storage/${user?.foto8}`: fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => handleChange(e, 9)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </section>
  );
};
