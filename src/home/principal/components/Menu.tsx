import { Link } from 'react-router-dom';
import logo from '../assets/logomastersinfondo.png'
import { useState } from 'react';

export const Menu = () => {
    const [expand,setExpand] = useState(false);
  return (
    <>
        {/* navegacion desktop */}
        <nav className='absolute border-b-2 h-20 w-full md:flex flex-row gap-5 justify-between p-2 items-center z-50 hidden'>
            {/* logo  */}
            <Link to={'/'} className='w-1/3 flex flex-row justify-start '>
                <img src={logo} alt="" className='w-20' />
            </Link>
            <div className='w-full flex flex-row justify-end gap-2'>
                <Link to={'/especialistas/todas/todas/0'}>
                    <p className='p-2 text-white'>Especialistas</p>
                </Link>
                <Link to={'/e-comerce'}>
                    <p className='p-2 text-white'>Productos</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2 text-white'>Contactanos</p>
                </Link>
                <Link to={'/login'}>
                    <p className='border-2 p-2 border-sky-500 rounded-xl bg-[#1C76ED]/40 hover:bg-[#1C76ED]/60 transition-all backdrop-blur-xl font-bold text-white'>
                    Zona para profesional
                    </p>
                </Link>
            </div>
        </nav>
        {/* navegacion mobile */}
        <nav className={`${expand ? 'h-screen ' : 'h-16' }  md:hidden w-full  bg-sky-500/30 backdrop-blur-xl fixed z-50 flex flex-col transition-all overflow-hidden `}>
            <div className='w-full h-20 flex flex-row justify-between items-center p-2'>
                <Link to={'/'} className='w-1/3 flex flex-row justify-start '>
                    <img src={logo} alt="" className='w-24' />
                </Link>
                {expand ? 
                
                    <button onClick={()=>setExpand(false)} className='rotate-180 w-10 h-10 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                :
                    <button onClick={()=>setExpand(true)} className=' w-10 h-10 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                }
            </div>
            <div className='w-full flex flex-col justify-end gap-2'>

                <Link to={'/especialistas/todas/todas/0'}>
                    <p className='p-2 text-white'>Especialistas</p>
                </Link>

                <Link to={'/e-comerce'}>
                    <p className='p-2 text-white'>Productos</p>
                </Link>
                <Link to={'/'}>
                    <p className='p-2 text-white'>Contactanos</p>
                </Link>
                <div className='w-full flex justify-center'>
                    <Link to={'/login'} className='w-[90%]'>
                        <p className=' border-2 p-2 border-sky-800 rounded-xl bg-[#1C76ED] hover:bg-[#1C76ED]/80 transition-all backdrop-blur-xl font-bold text-white text-center'>
                            Zona profesional 
                        </p>
                    </Link>

                </div>
            </div>
        </nav>
    
    </>
  )
}
