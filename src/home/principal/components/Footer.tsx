

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
          <img src={'/logomastersinfondo.png'} alt="" />
        </div>
        {/* enlaces */}
        <div className="w-full h-full  flex flex-col gap-2 p-2">
          <h5 className='text-xl font-bold text-slate-950'>Sitios relevantes</h5>
          <Link to={'/especialistas'}>
            <p className='p-2 text-blue-500 border-b-2'>Especialistas</p>
          </Link>
          <Link to={'/e-comerce'}>
            <p className='p-2 text-blue-500 border-b-2'>E-comerce</p>
          </Link>
          <Link to={'/'}>
            <p className='p-2 text-blue-500 border-b-2'>Contactenos</p>
          </Link>
          <Link to={'/login'}>
            <p className='p-2 text-blue-500 border-b-2'>Login</p>
          </Link>
        </div>
        {/* politicas */}
        <div className="w-full h-full  flex flex-col gap-2 p-2">
          <h5 className='text-xl font-bold text-slate-950'>Politicas de la pagina</h5>
          <a href="/Politica_Tratamiento_Datos.pdf" target='_blank'>Politica de tratamiento de datos</a>
          <a href="/Uso_de_mi_informacion_personal.pdf" target='_blank'>Uso de mi informacion personal</a>
          <a href="/Uso_de_mi_Información_por_Terceros.pdf" target='_blank'>Uso de mi informacion por terceros</a>
          <a href="/Terminos_y_Condiciones.pdf" target='_blank'>Terminos y condiciones</a>
          <a href="" target='_blank'>Proteccion de menores</a>
          <a href="/Solicitud_PQRS.pdf" target='_blank'>Solicitud PQRS</a>
          <a href="/Privacidad_y_cookies.pdf" target='_blank'>Privacidad y cookies</a>
        </div>
        {/* contacto */}
        <div className="w-full h-full  flex flex-col gap-2 p-2">
          <h5 className='text-xl font-bold text-slate-950'>Quieres hablar con nosotros?</h5>
          <a href="">Correo: info@masterdescuentos.com
          </a>
          <a href="">Telefono: +6019273978</a>
          <a href="">Whatsapp: +57 318 9678600</a>
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
