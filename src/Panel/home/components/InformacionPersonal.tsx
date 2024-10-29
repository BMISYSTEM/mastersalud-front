import useSWR from 'swr';
import { clienteAxios } from '../../../config/axios';
import spiner from '../../../assets/spiner.svg'
import fondo from './assets/fondo.webp'
import { PhotoIcon } from '@heroicons/react/24/outline';
import { Input } from '../../../componentsGlobal/Input';
import { toast } from 'react-toastify';
interface props {
  setInformacion: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Users {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    created_at:        Date;
    updated_at:        Date;
    rol:               number;
    nombre:            null;
    apellido:          null;
    cedula:            null;
    fijo:              null;
    celular:           null;
    direccion:         null;
    cargo:             null;
    horarioatencion:   null;
    publico:           null;
    mediospago:        null;
    fotoperfil:        null;
    foto1:             null;
    foto2:             null;
    foto3:             null;
    foto4:             null;
    foto5:             null;
    foto6:             null;
    foto7:             null;
    foto8:             null;
    activo:            number;
}

export const InformacionPersonal = ({ setInformacion }: props) => {
    const token = localStorage.getItem('token')
    const {data,isLoading,mutate} = useSWR('/api/users',()=>
    clienteAxios.get('/api/users',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    const user:Users = data?.data;


    const updateUser = (datos:Users) =>{
        toast.promise(
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
    }
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
                    <img src={user?.fotoperfil ? user?.fotoperfil :  fondo} alt="" className='object-contain' />
                </div>
                <form action="">
                    <input type="file" />
                </form>
                <div className='w-full flex flex-row gap-2 items-center'>
                    <p>Nombre:{user.name}</p>
                    <input type="text"  onBlur={(e)=>updateUser({...user,name:e.target.value})} />
                </div>
                <p>Apellido: {user.apellido}</p>
                <p>Cedula/Nit: {user.cedula}</p>
                <p>Email: {user.email}</p>
                <p>Fijo: {user.fijo}</p>
                <p>telefono: {user.celular}</p>
                <p>Especialidad: {user.cargo}</p>
                <p>Horario de atencion: {user.horarioatencion}</p>
                <p>Publico de atencion: {user.publico}</p>
                <p>Medios de pago: {user.mediospago}</p>
                <div className='w-full flex flex-wrap gap-2'>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto1 ? user.foto1 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto2 ? user.foto2 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto3 ? user.foto3 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto4 ? user.foto4 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto5 ? user.foto5 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto6 ? user.foto6 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto7 ? user.foto7 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
                                    className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border p-1'>
                        <img src={user.foto8 ? user.foto8 : fondo} alt="" className='w-24 h-24 object-contain' />
                        <div className="w-full flex flex-row gap-2">
                            <div>
                                <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                                    <PhotoIcon className="w-4 h-4 " />
                                    <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    // onChange={(e) => handleChange(e, idimagenes, 1)}
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
