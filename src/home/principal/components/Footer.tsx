

import logo from '../assets/logomastersinfondo.png'
import facebook from '../assets/facebookazul.png'
import instagram from '../assets/instagramcolor.png'
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#F7F7F7] flex flex-col gap-1 p-2 overflow-hidden">
      <section className="w-full h-full flex md:flex-row flex-col  gap-1">
        {/* logo */}
        <div className="w-full h-full  flex items-center">
          <img src={logo} alt="" />
        </div>
        {/* enlaces */}
        <div className="w-full h-full  flex flex-col gap-2 p-2">
          <h5 className='text-xl font-bold text-slate-950'>Sitios relevantes</h5>
          <Link to={'/especialistas'}>
            <p className='p-2 text-blue-500 border-b-2'>Especialistas</p>
          </Link>
          <Link to={'/especialistas'}>
            <p className='p-2 text-blue-500 border-b-2'>E-comerce</p>
          </Link>
          <Link to={'/especialistas'}>
            <p className='p-2 text-blue-500 border-b-2'>Contactenos</p>
          </Link>
        </div>
        {/* politicas */}
        <div className="w-full h-full  flex flex-col gap-2 p-2">
          <h5 className='text-xl font-bold text-slate-950'>Politicas de la pagina</h5>
          <a href="">Politica de tratamiento de datos</a>
          <a href="">Uso de mi informacion personal</a>
          <a href="">Uso de mi informacion por terceros</a>
          <a href="">Terminos y condiciones</a>
          <a href="">Proteccion de menores</a>
          <a href="">Solicitud PQRS</a>
          <a href="">RNT</a>
        </div>
        {/* contacto */}
        <div className="w-full h-full  flex flex-col gap-2 p-2">
          <h5 className='text-xl font-bold text-slate-950'>Quieres hablar con nosotros?</h5>
          <a href="">Correo: info@masterdescuentos.com
          </a>
          <a href="">Telefono: +6019273978</a>
          <a href="">Whatsapp: +57 322 719 9754</a>
        </div>
      </section>
      {/* redes sociales y quien desarrolla */}
      <section className="w-full flex flex-col justify-center mt-10">
        <div className='w-full flex flex-row gap-5 justify-center'>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className='w-full text-center '>
          <p className='text-sm'>PBX: (601) 9273978. Bogotá línea nacional 3128672671. Dirección: Avenida Calle 47 # 13 – 33 Oficina 108 – B Torre B Nit: 901.641.108 - 5
          COPYRIGHT © 2023 Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita de su titular</p>
          <p className='text-sm'>Desarrollado por: Bayron meneses BY SYPROD</p>
        </div>
      </section>
    </footer>
  )
}
