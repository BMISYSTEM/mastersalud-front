import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';
import banner from '../assets/Polygon 1.png'
import circulo from '../assets/circulo2.png'
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
    <header className='relative  w-full h-screen bg-white'>
        <Helmet>
            <title>
                MasterSalud - Home
            </title>
        </Helmet>
        
        <nav className='absolute border-b-2 w-full flex flex-row gap-5 justify-between p-2 items-center z-50'>
            {/* logo  */}
            <div className='w-full flex flex-row justify-start'>
                <p className='text-3xl font-bold p-2'>MasterSalud</p>
            </div>

            <div className='w-full flex flex-row justify-end gap-2'>
                <Link to={'/'}>
                    <p className='p-2'>Nosotros</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2'>Especialistas</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2'>Centros Medicos</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2'>E-Comerce</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2'>Contactanos</p>
                </Link>
                <Link to={'/'}>
                    <p className='border-2 p-2 border-slate-300 rounded-sm text-white'>Iniciar Session</p>
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
        <section className='absolute w-[40rem] h-[30rem] mt-[15%] ml-[10%] rounded-lg border-2 bg-[#1C76ED]/40 backdrop-blur-xl border-sky-600 z-50 flex flex-col gap-3 items-center'>
                <p className='text-2xl font-bold  text-center p-2 text-white'>Encuentra a tu especialista</p>
                <div className='w-1/2 flex flex-row gap-2 justify-between'>
                    <button className='p-2 bg-slate-300 font-bold rounded-sm'>Presencial</button>
                    <button className='p-2 bg-slate-300 font-bold rounded-sm'>Virtual</button>
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
