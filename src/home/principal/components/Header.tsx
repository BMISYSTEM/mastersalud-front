import React from 'react';

import Helmet from 'react-helmet';
import banner from '../assets/Polygon 1.png'
import circulo from '../assets/circulo2.png'
import casa from '../assets/iconoCasa.png'
import camara from '../assets/iconoCamara.png'
import doctor from '../assets/iconoDoctor.png'
import pointer from '../assets/iconoPointer.png'
import flecha from '../assets/flecha.png'
import lupa from '../assets/lupa.png'
import { Menu } from './Menu';
export const Header: React.FC = () => {

  return (
    <header className='relative  w-full h-screen bg-[#F7F7F7] overflow-hidden flex justify-center md:justify-start'>
        <Helmet>
            <title>
                MasterSalud - Home
            </title>
        </Helmet>
        <Menu/>
        <div className='absolute w-42 mt-32'>
            <img src={circulo} alt="" />
        </div>
        <div className='absolute  mt-[30%] ml-[60%]'>
            <img src={circulo} alt="" className='object-contain p-2 w-full h-full' />
        </div>
        {/* buscador */}
        <section className=' absolute md:w-[40rem] w-[95%] h-[25rem] md:mt-[15%] mt-[40%] md:ml-[10%] rounded-lg border-2 bg-[#1C76ED]/40 backdrop-blur-xl  border-sky-600 z-40 flex flex-col gap-3 items-center'>
                <p className='text-2xl font-bold  text-center p-2 text-white'>Encuentra a tu especialista</p>
                <div className='md:w-1/2 w-5/6 flex flex-row gap-2 justify-between'>
                    <button className='p-2 bg-slate-200 font-bold rounded-sm flex flex-row gap-2 hover:bg-slate-400 transition-all'>
                        <img src={casa} alt="" />
                        <p>Presencial</p>
                    </button>
                    <button className='p-2 bg-slate-200 font-bold rounded-sm flex flex-row gap-2 hover:bg-slate-400 transition-all'>
                        <img src={camara} alt="" />
                        <p>Virtual</p>
                    </button>
                </div>
                <div className='md:w-2/3 w-[95%] h-full flex flex-col justify-center gap-5 '>
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
        <div className='relative w-full h-full flex justify-end z-0 '>
            <img src={banner} alt="Imagen de doctor atendiendo una cirugia" className=' object-cover md:object-fill h-full md:w-[70%] w-full  ' />
           
        </div>
    </header>
  );
};
