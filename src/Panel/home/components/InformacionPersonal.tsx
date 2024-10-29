import useSWR from 'swr';
import { clienteAxios } from '../../../config/axios';
import spiner from '../../../assets/spiner.svg'
import fondo from './assets/fondo.webp'
import { PhotoIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
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
}

export const InformacionPersonal = ({ setInformacion }: props) => {
    const token = localStorage.getItem('token')
    const baseUrl = import.meta.env.VITE_URL_API;
    const {data,isLoading,mutate} = useSWR('/api/users',()=>
    clienteAxios.get('/api/users',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    const user:Users = data?.data;


    const updateUser = async(datos:Users) =>{
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
        mutate()
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
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Nombre:{user.name}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,name:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Apellido: {user.apellido}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,apellido:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Cedula/Nit: {user.cedula}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,cedula:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Email: {user.email}</p>
                    <input className='p-2 border rounded-xl' type="email"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,email:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Fijo: {user.fijo}</p>
                    <input className='p-2 border rounded-xl' type="tel"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,fijo:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>telefono: {user.celular}</p>
                    <input className='p-2 border rounded-xl' type="tel"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,celular:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Especialidad: {user.cargo}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,cargo:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Horario de atencion: {user.horarioatencion}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,horarioatencion:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Publico de atencion: {user.publico}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,publico:e.target.value})}} />
                </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between'>
                    <p>Medios de pago: {user.mediospago}</p>
                    <input className='p-2 border rounded-xl' type="text"  onBlur={(e)=>{
                        if(e.target.value !== '') updateUser({...user,mediospago:e.target.value})}} />
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
