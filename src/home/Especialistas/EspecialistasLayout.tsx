import { useEffect } from 'react'
import { Menu } from '../principal/components/Menu'
import { Footer } from '../principal/components/Footer'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { clienteAxios } from '../../config/axios'
import useSWR from 'swr'
import { Medicos } from '../perfil-detalle/PerfilDetalleLayout'

export const EspecialistasLayout = () => {
    const {ciudad,especialidad,modalidad} = useParams()
    const {data} = useSWR('/api/medic/all',()=>
    clienteAxios.get('/api/medic/all'));
    let medico:Medicos = data?.data;
    if(ciudad !== 'todas' && medico?.succes)
    {
        medico.succes = medico?.succes?.filter((medic)=>{
            if (medic.ciudad === ciudad)
            {
                return medic
            }
        })
    }
    if(especialidad !== 'todas' && medico?.succes)
    {
        medico.succes = medico?.succes?.filter((medic)=>{
            if (medic.cargo === especialidad)
            {
                return medic
            }
        })
    }
    if(modalidad !== 'todas' && medico?.succes)
    {
        medico.succes = medico?.succes?.filter((medic)=>{
            if(Number(modalidad) === 1 )
            {
                if (medic.virtual === 1 )
                {
                    return medic
                }
            }else{
                if (medic.presencial === 1 )
                {
                    return medic
                }

            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className='w-full h-full '>
        <Helmet>
           <title>Master-Especialistas</title>     
        </Helmet>
        <Menu/>
        <main className='w-full flex flex-col h-full min-h-screen bg-slate-200 p-20'>
            <h1 className='text-2xl font-bold'>Especialistas</h1>
            {medico?.succes?.map((medic,index)=>(
                <Link key={index} className="w-full flex md:flex-row flex-col gap-2 mt-5 border border-blue-500 p-2 rounded-lg hover:border-blue-500" 
                to={`/doc-detalle/${medic.id}`}>
                    <img src={`https://api.mastersalud.co/storage/${medic.fotoperfil}`} alt="" 
                    className="w-64 object-fill"/>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-lg font-bold">Nombre: <span className="text-lg font-thin">{medic.name}</span></p>
                        <p className="text-lg font-bold">Apellido: <span className="text-lg font-thin">{medic.apellido}</span></p>
                        <p className="text-lg font-bold">Telefono: <span className="text-lg font-thin">{medic.celular}</span></p>
                        <p className="text-lg font-bold">Ciudad: <span className="text-lg font-thin">{medic.ciudad}</span></p>
                        <p className="text-lg font-bold">Direccion: <span className="text-lg font-thin">{medic.direccion}</span></p>
                        <p className="text-lg font-bold">Especialidad: <span className="text-lg font-thin">{medic.cargo}</span></p>
                        <p className="text-lg font-bold">Publico: <span className="text-lg font-thin">{medic.publico}</span></p>
                        <p className="text-lg font-bold">Medios de pago: <span className="text-lg font-thin">{medic.mediospago}</span></p>
                        <p className="text-lg font-bold">Horario de atencion: <span className="text-lg font-thin">{medic.horarioatencion}</span></p>
                    </div>
                </Link>
            ))}
        </main>
        <Footer/>
    </section>
  )
}
