
import doctores from '../assets/doctoresimg.png'
import curriculum from '../assets/curriculum.png'
import calendario from '../assets/calendario.png'
import fondo from '../assets/fondoPasos.png'
import medicos from '../assets/medicos.jpg'
import flechaazul from '../assets/flechaazul.png'
import flecha from '../assets/flechaPunteada.png'
// -----------------------------------------------------
import diente from '../assets/diente.png'
import corazon from '../assets/corazon.png'
import dermatologia from '../assets/dermatologo.png'
import urologo from '../assets/urologo.png'
import ortopedia from '../assets/ortopedia.png'
import ginecologo from '../assets/ginecologo.png'
// -------------------------------------------------------------
import doc1 from '../assets/doctora1.png'
import paloma from '../assets/paloma.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import fondoDoctor from '../assets/fondoDoctores.png'
import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context,  } from '../../Context/MastersaludContext'
//------------------------------------------------------------------
import fondoCelular from '../assets/imagenparatelefonoDoc.png'
import celular from '../assets/celular.png'
export const Main = () => {
  const {setvieTransitionName} = useContext(context)
  const navigate = useNavigate()
  const detalledoc = (name:string) => {
        // Verifica si startViewTransition está disponible
        if ('startViewTransition' in document) {
          document.startViewTransition(() => {
            // Utiliza flushSync para asegurar la sincronización antes de la navegación
            
            flushSync(async () => {
              setvieTransitionName(name)
              navigate('/doc-detalle');
            });
          });
        } else {
          // Si no está disponible, solo navega directamente
          navigate('/doc-detalle');
        }
      };
  return (
    <main className='w-full h-full   bg-[#F7F7F7] flex flex-col gap-10'>
      {/* como pedir tu cita  */}
      <section className=" animateViewPort relative w-full justify-center p-5 flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-slate-900 z-50">Como pedir tu cita</h1> 
        <section className="flex flex-row gap-2 justify-center w-full h-[24rem] z-50 ">
            <div className="w-96 h-auto  flex flex-col gap-2">
              <img src={doctores} alt="" className='w-full h-96' />
              <p className='text-center'>Busca los mejores doctores online</p>
              <div className='w-full border-t-2 border-black'></div>
            </div>
            <div className='w-20 h-full  flex flex-col justify-center items-center'>
              <img src={flecha} alt="" />
            </div>
            <div className="w-96 h-auto  flex flex-col gap-2">
              <img src={curriculum} alt="" className='w-full h-96' />
              <p className='text-center'>Ver el perfil de tu especialista</p>
              <div className='w-full border-t-2 border-black'></div>
            </div>
            <div className='w-20 h-full  flex flex-col justify-center items-center'>
              <img src={flecha} alt="" />
            </div>
            <div className="w-96 h-auto  flex flex-col gap-2">
              <img src={calendario} alt="" className='w-full h-96' />
              <p className='text-center'>Obtén una cita con el doctor de manera instantánea</p>
              <div className='w-full border-t-2 border-black'></div>
            </div>
        </section>
        <div className='absolute'>
          <img src={fondo} alt="" />
        </div>
      </section>
      {/* especialidades */}
      <section className='relative w-full justify-center  flex flex-col gap-5 mt-24 '>
        <div className=' absolute w-full h-full blur-lg'>
          <img src={medicos} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className=' absolute w-full h-full bg-black/1'>
        </div>
        <div className='p-5 z-50 h-full flex flex-col gap-5'>
          <h2 className='text-5xl font-bold mt-10 z-50 ml-10'>Explora por especialistas </h2>
          {/* contenedor de especialidades */}
          <div className='  w-full flex flex-row gap-10 z-50 '>
            {/* contenedor 1  */}
            <div className='animatexView w-full flex flex-col gap-2'>
              <div className='w-full flex flex-row gap-2'>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg flex flex-col justify-center items-center gap-5'>
                  <img src={diente} alt="" />
                  <p className='text-3xl font-bold text-sky-700'>Odontologia</p>
                  <img src={flechaazul} alt="" />
                </div>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg flex flex-col justify-center items-center gap-5'>
                  <img src={corazon} alt="" />
                  <p className='text-3xl font-bold text-sky-700'>Cardiologia</p>
                  <img src={flechaazul} alt="" />
                </div>
              </div>
              <div className='w-full h-52 bg-[#FFF6F6]/50 backdrop-blur-xl  border-sky-500 border-2 rounded-lg flex flex-col justify-center items-center gap-2'>
                  <img src={dermatologia} alt="" />
                  <p className='text-3xl font-bold text-sky-700'>Dermatologia</p>
                  <img src={flechaazul} alt="" />
              </div>
            </div>
            {/* contenedor 2  */}
            <div className='animatexView w-full flex flex-col gap-2'>
              <div className='w-full flex flex-row gap-2'>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg flex flex-col justify-center items-center gap-5'>
                  <img src={urologo} alt="" />
                  <p className='text-3xl font-bold text-sky-700'>Urologia</p>
                  <img src={flechaazul} alt="" />
                </div>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg flex flex-col justify-center items-center gap-5'>
                  <img src={ortopedia} alt="" />
                  <p className='text-3xl font-bold text-sky-700'>Ortopedico</p>
                  <img src={flechaazul} alt="" />
                </div>
              </div>
              <div className='w-full h-52 bg-[#FFF6F6]/50 backdrop-blur-xl  border-sky-500 border-2 rounded-lg flex flex-col justify-center items-center gap-2'>
                  <img src={ginecologo} alt="" />
                  <p className='text-3xl font-bold text-sky-700'>Giniecologo</p>
                  <img src={flechaazul} alt="" />
              </div>
            </div>
          </div>  
          <div className='w-full flex flex-row gap-2 justify-center h-10'>
            {/* mandar a pagina con listado de doctores all */}
            <button className='w-1/2 h-10 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg flex flex-row gap-2 justify-center items-center p-2'>
              <p className='text-2xl font-bold text-sky-700'>Ver todas las categorias</p>
              <img src={flechaazul} alt="" className='w-10' />
            </button>
          </div>
        </div>
        
      </section>
      {/* medicos */}
      <section id={'medicos'} className='relative w-full  h-full justify-center  flex flex-col gap-5 mt-10 '>
      <div className=' absolute w-full h-full blur-lg'>
          <img src={fondoDoctor} alt="" className='object-cover w-full h-full'/>
        </div>
        <h3 className='text-5xl font-bold mt-10 z-50 ml-10'>Especialistas mejor valorados</h3>
        <div className='w-full flex flex-wrap p-5 z-50 gap-5 justify-center'>
          {/* tarjeta */}
          <button className='animateyView w-72 h-[30rem] bg-[#2899CD] rounded-lg flex flex-col hover:scale-110 transition-all' onClick={()=>detalledoc('doc1')} >
            <div className='w-full h-2/3'>
              <img src={doc1} alt="" className='object-fill w-full h-full' style={{viewTransitionName:'doc1'}}  />
            </div>
            <div className='w-full h-full flex flex-col gap-2 p-2 '>
              <p className='text-white font-bold text-2xl text-center'>Ginecologa</p>
              <p className='text-white font-bold text-3xl text-left'>Dr Mark Smith</p>
              {/* comentarios y estrellas */}
              <div className='w-full flex flex-row gap-1 items-center '>
                {/* estrellas */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <p className='text-sm font-bold text-white'>10 Comentarios</p>
              </div>
              {/* redes sociales */}
              <div className='w-full flex flex-row gap-2 justify-center'>
                <a href="">
                  <img src={paloma} alt=""  className=''/>
                </a>
                <a href="">
                  <img src={instagram} alt=""  className=''/>
                </a>
                <a href="">
                  <img src={facebook} alt=""  className=''/>
                </a>
              </div>
            </div>
          </button>
          <button className='animateyView w-72 h-[30rem] bg-[#2899CD] rounded-lg flex flex-col hover:scale-110 transition-all' onClick={()=>detalledoc('doc1')} >
            <div className='w-full h-2/3'>
              <img src={doc1} alt="" className='object-fill w-full h-full' style={{viewTransitionName:'doc1'}}  />
            </div>
            <div className='w-full h-full flex flex-col gap-2 p-2 '>
              <p className='text-white font-bold text-2xl text-center'>Ginecologa</p>
              <p className='text-white font-bold text-3xl text-left'>Dr Mark Smith</p>
              {/* comentarios y estrellas */}
              <div className='w-full flex flex-row gap-1 items-center '>
                {/* estrellas */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <p className='text-sm font-bold text-white'>10 Comentarios</p>
              </div>
              {/* redes sociales */}
              <div className='w-full flex flex-row gap-2 justify-center'>
                <a href="">
                  <img src={paloma} alt=""  className=''/>
                </a>
                <a href="">
                  <img src={instagram} alt=""  className=''/>
                </a>
                <a href="">
                  <img src={facebook} alt=""  className=''/>
                </a>
              </div>
            </div>
          </button>
        </div>
      </section>
      <section className='animatexView relative w-full h-screen justify-center  flex flex-row gap-5 mt-24 bg-gradient-to-r from-[#A0DCF0] to-[#EAFAFF] overflow-hidden '>
        {/* foto doctora */}
        <div className='  w-full h-full'>
          <img src={fondoCelular} alt="" className=' object-contain w-full h-full'/>
        </div>
        {/* foto telefono */}
        <div className=' w-full flex flex-col gap-5'>
          <h4 className='text-5xl font-bold text-slate-700 mt-10 '>Pronto nuestra App</h4>
          <div className='w-full h-full flex justify-end '>
            <img src={celular} alt="" className=' object-contain h-auto   w-5/6' />
          </div>
        </div>
      </section>
    </main>
  )
}
