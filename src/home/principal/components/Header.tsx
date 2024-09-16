import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';
import banner from '../assets/Polygon 1.png'
import circulo from '../assets/circulo2.png'
import casa from '../assets/iconoCasa.png'
import camara from '../assets/iconoCamara.png'
import doctor from '../assets/iconoDoctor.png'
import pointer from '../assets/iconoPointer.png'
import flecha from '../assets/flecha.png'
import lupa from '../assets/lupa.png'
export const Header: React.FC = () => {


//   const detalledoc = () => {
//     // Verifica si startViewTransition está disponible
//     if ('startViewTransition' in document) {
//       document.startViewTransition(() => {
//         // Utiliza flushSync para asegurar la sincronización antes de la navegación
//         flushSync(() => {
//           navigate('/doc-detalle');
//         });
//       });
//     } else {
//       // Si no está disponible, solo navega directamente
//       navigate('/doc-detalle');
//     }
//   };

  return (
    <header className='relative  w-full h-screen bg-[#F7F7F7]'>
        <Helmet>
            <title>
                MasterSalud - Home
            </title>
        </Helmet>
        
        <nav className='absolute border-b-2 w-full flex flex-row gap-5 justify-between p-2 items-center z-50'>
            {/* logo  */}
            <div className='w-1/3 flex flex-row justify-start '>
                <p className='text-3xl font-bold p-2'>MasterSalud</p>
            </div>

            <div className='w-full flex flex-row justify-end gap-2'>
                <Link to={'/'}>
                    <p className='p-2 text-white'>Nosotros</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2 text-white'>Especialistas</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2 text-white'>Centros Medicos</p>
                </Link>
                <Link to={'/e-comerce'}>
                    <p className='p-2 text-white'>E-Comerce</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2 text-white'>Contactanos</p>
                </Link>
                <Link to={'/login'}>
                    <p className='border-2 p-2 border-sky-500 rounded-xl bg-[#1C76ED]/40 hover:bg-[#1C76ED]/60 transition-all backdrop-blur-xl font-bold text-white'>Iniciar Session</p>
                </Link>
            </div>
        </nav>
        <div className='absolute w-42 mt-32'>
            <img src={circulo} alt="" />
        </div>
        <div className='absolute  mt-[30%] ml-[60%]'>
            <img src={circulo} alt="" className='object-contain p-2 w-full h-full' />
        </div>
        {/* buscador */}
        <section className='absolute w-[40rem] h-[25rem] mt-[15%] ml-[10%] rounded-lg border-2 bg-[#1C76ED]/40 backdrop-blur-xl  border-sky-600 z-50 flex flex-col gap-3 items-center'>
                <p className='text-2xl font-bold  text-center p-2 text-white'>Encuentra a tu especialista</p>
                <div className='w-1/2 flex flex-row gap-2 justify-between'>
                    <button className='p-2 bg-slate-200 font-bold rounded-sm flex flex-row gap-2 hover:bg-slate-400 transition-all'>
                        <img src={casa} alt="" />
                        <p>Presencial</p>
                    </button>
                    <button className='p-2 bg-slate-200 font-bold rounded-sm flex flex-row gap-2 hover:bg-slate-400 transition-all'>
                        <img src={camara} alt="" />
                        <p>Virtual</p>
                    </button>
                </div>
                <div className='w-2/3 h-full flex flex-col justify-center gap-5 '>
                    <div className='w-full p-2 bg-slate-200 rounded-sm flex flex-row justify-between cursor-pointer'>
                        <img src={doctor} alt="" />
                        <p>Especialidad, enfermedad o nombre</p>
                        <img src={flecha} alt="" />
                    </div>
                    <div className='w-full p-2 bg-slate-200 rounded-sm flex flex-row justify-between  cursor-pointer'>
                        <img src={pointer} alt="" />
                        <p>Ciudad ej. Bogota</p>
                        <img src={flecha} alt="" />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button className='px-5 py-2 text-lg font-bold text-white bg-sky-900 rounded-sm flex flex-row gap-2 hover:scale-105 transition-all'>
                            <img src={lupa} alt="" />
                            <p>Buscar</p>
                        </button>
                    </div>
                </div>
        </section>
        {/* imagen de fondo */}
        <div className='relative w-full h-full flex justify-end '>
            <img src={banner} alt="Imagen de doctor atendiendo una cirugia" className='h-full w-[70%] ' />
            <div className=' absolute w-full h-full '>
            </div> 
        </div>
    </header>
  );
};
