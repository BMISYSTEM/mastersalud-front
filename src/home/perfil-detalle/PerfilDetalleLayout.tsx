import { Link, useNavigate } from "react-router-dom";
import doc from "../principal/assets/images.jpeg";
import { flushSync } from "react-dom";
import { Helmet } from "react-helmet";
import  { useContext, useState } from "react";
import { context } from "../Context/MastersaludContext";
import Modal from 'react-modal'
import consultorio from "./assets/consultorio.webp";
import { Calendario } from "./components/Calendario";
import 'animate.css'




export const PerfilDetalleLayout = () => {
  const { vieTransitionName } = useContext(context);
    const horas: string[] = [
      "05:00", "06:00", "07:00", 
      "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", 
      "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];
  const [diaSelect,setDiaSelect] = useState<string>('')
  const [horaSelect,setHoraselect] = useState<string>('')
  const [formularioCompleto,setFormularioCompleto] = useState(false)
  const navigate = useNavigate();
  const detalledoc = () => {
    // Verifica si startViewTransition está disponible
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        // Utiliza flushSync para asegurar la sincronización antes de la navegación
        flushSync(() => {
          navigate("/");
        });
      });
    } else {
      // Si no está disponible, solo navega directamente
      navigate("/");
    }
  };
  const cerrarModal =() =>{
    setDiaSelect('')
    setHoraselect('')
    setFormularioCompleto(false)
  }
  /**
   * Una vez se tenga seleccionado la fecha y la hora se pasa al formulario de datos para completar
  */
  const SeleccionHora = (hora:string) =>{
    setHoraselect(hora)
    if(diaSelect && hora){
      setFormularioCompleto(true)
    }
  }
  console.log(diaSelect,horaSelect)
  return (
    <section className="w-full h-screen  flex flex-row justify-center overflow-hidden">
      <Helmet>
        <title>MasterSalud Detalle-Doctor</title>
      </Helmet>
      <section className="w-full h-full flex flex-row items-start  gap-2 overflow-screen">
        <section className="w-full flex flex-col gap-2 h-full  overflow-auto">
          <Link to={'/'} className="px-2 text-sky-500 font-bold flex flex-row gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            <p>Volver al Home</p>
          </Link>
          <div className="w-full flex flex-row gap-2 bg-white p-2">
            <button onClick={() => detalledoc()}>
              <img
                src={doc}
                alt=""
                style={{ viewTransitionName: vieTransitionName }}
                className="w-42 h-auto rounded-xl"
              />
            </button>
            <div className="w-full flex flex-col gap-2 bg-white">
              <p className="text-3xl font-bold">
                Dra. Luciana Meneses Casallas
              </p>
              <p>Cardiologa</p>
              <p>Cali cr27g#122-100</p>
              <div className="w-full flex flex-row gap-1 items-center ">
                {/* estrellas */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-bold text-slate-500">
                  10 Comentarios
                </p>
              </div>

            </div>
          </div>
          {/* navar */}
          <nav className=" sticky top-0 m-0 w-full flex flex-row gap-2 justify-between border-t-2 border-b-2 p-2 bg-white">
            <a href="#informacion" className="text-center w-full">
              Informacion
            </a>
            <a href="#fotos" className="text-center w-full">
              Fotos
            </a>
            <a href="#comentarios" className="text-center w-full">
              Comentarios
            </a>
          </nav>
          {/* muestra la busqueda */}
          <section className="w-full flex flex-col gap-2 ">
            {/* informacion */}
            <div id="informacion" className="w-full flex flex-col bg-white gap-2 p-2 text-sm">
              <div className="w-full flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <p>De lunes a viernes</p>
              </div>
              <div className="w-full flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p>Adultos y Infantes</p>
              </div>
              <div className="w-full flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>

                <p>Transferencia y Efectivo</p>
              </div>
              <div className="w-full flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>

                <p>+57 3184482848</p>
              </div>
              <div className="w-full flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>Cr 27g#122-100</p>
              </div>
              <div className="w-full flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                  />
                </svg>

                <p>Cardiologia</p>
              </div>
            </div>
            {/* fotos */}
            <div id="fotos" className="w-full flex flex-col gap-2 p-2  border-2 bg-white">
              <h2 className="text-2xl font-bold text-slate-600">Galeria</h2>
              <div className="w-full flex flex-wrap">
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
                <button>
                  <img
                    src={consultorio}
                    alt=""
                    className="w-40 h-40 object-fill"
                  />
                </button>
              </div>
            </div>
            {/* comentarios */}
            <div id="comentarios" className="w-full flex flex-col gap-2 p-2"></div>
          </section>
        </section>
        {/* segunda columna */}
        <section className="sticky mt-0 w-full h-full flex flex-col gap-2 bg-white ">
          <div className="w-full h-10 bg-sky-800 p-1">
            <p className="text-xl font-bold text-white">Agendar cita</p>
          </div>
          <section className="w-full h-full flex flex-col gap-2 ">
            {/* opciones presencial o virtual */}
            <div className="w-full flex flex-row gap-4 p-2">
              <button className="border-b-2 border-slate-900 flex flex-row gap-2 items-center text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p>Presencial</p>
              </button>
              <button className="border-b-2 flex flex-row gap-2 items-center text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <p>Virtual</p>
              </button>
            </div>
            {/* presencial */}
            <div className="w-full flex flex-row  text-sm">
              <form action="" className="w-full flex flex-col gap-4 p-1">
                <label htmlFor="" className="w-full flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p>Direccion</p>
                </label>
                <p className="text-sm border-2 p-1  text-justify">
                  Calle 9C 50 25 Clinica FARALLONES, Cali Unidad de Patologia
                  Cervical Dr Jesus Alberto Valencia
                </p>
                <label htmlFor="" className="w-full flex flex-row gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                    />
                  </svg>
                  <p className="text-sm">Elige el Motivo de la visita</p>
                </label>
                <select name="" id="" className="p-2 border-2 text-sm">
                  <option value="">Consulta medica de ginecologia</option>
                  <option value="">Consulta medica de ginecologia</option>
                  <option value="">Consulta medica de ginecologia</option>
                  <option value="">Consulta medica de ginecologia</option>
                  <option value="">Consulta medica de ginecologia</option>
                </select>
                <label htmlFor="" className="w-full flex flex-row gap-2 mt-2 text-sm items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <p>¿Es tu primera visita con este especialista?</p>
                </label>
                <select name="" id="" className="p-2 border-2 text-sm">
                  <option value="">Si</option>
                  <option value="">NO</option>
                </select>
                {/* horas */}
                <section className="w-full flex flex-col gap-2 mt-2">
                  <div className="w-full flex flex-row gap-2 items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  <p>Consulta Disponibilidad</p>
                  </div>
                  <Calendario diaselect={setDiaSelect} />
                </section>
              </form>
            </div>
          </section>
        </section>
      </section>
      {/* seleccion de orario */}
      <Modal isOpen={diaSelect !== '' ? true : false} className={'w-full h-full backdrop-blur-sm flex items-center justify-center animate__animated animate__fadeIn'}>
        <section className="w-96 h-full bg-white border border-sky-500 p-2 flex flex-col gap-2 overflow-auto">
          {/* botton de cerar */}
          <div className="w-full flex flex-row justify-between">
            <p className="text-lg font-bold  text-slate-500">Disponibilidad Horaria</p>
            <button onClick={()=>cerrarModal()} className="text-xs p-2 rounded-full bg-red-500 w-6 h-6 flex justify-center items-center text-white hover:scale-105 transition-all text-center">X</button>
          </div>
          
          <p className="text-sm"><span className="font-bold">Fecha de la consulta: </span>{diaSelect}</p>
          {formularioCompleto === false ? 
            <div className=" flex flex-col gap-2 overflow-auto">
              {horas.map((horas,index)=>(
                <button key={index} onClick={()=>SeleccionHora(horas)} className="w-full h-10 text-cl bg-slate-200 text-start p-2 flex flex-row hover:bg-sky-700 hover:text-white transition-all">
                  <p>{horas}</p>
                </button>
              ))}
            </div>
          :
            <div className="animate__animated animate__fadeInRight mt-5">
              <form action="" className="w-full h-full flex flex-col gap-2 overflow-auto ">
                  <label htmlFor="">Nombre del medico</label>
                  <label htmlFor="" className="text-lg text-slate-600">Calle 9C 50 25 Clinica FARALLONES, Cali Unidad de Patologia
                  Cervical Dr Jesus Alberto Valencia</label>
                  <label htmlFor=""> <span className="font-bold">Hora de la consulta:</span> {horaSelect} </label>
                  <label htmlFor=""> <span className="font-bold">Motivo de consulta:</span> {horaSelect} </label>
                  <label htmlFor="" className="font-bold">Nombre completo</label>
                  <input type="text" className="border border-slate-400 p-2 text-lg" required />
                  <label htmlFor="" className="font-bold">Telefono de contacto</label>
                  <input type="tel" className="border border-slate-400 p-2 text-lg" required />
                  <label htmlFor="" className="font-bold">Email</label>
                  <input type="email" className="border border-slate-400 p-2 text-lg" required />
                  <label htmlFor="" className="font-bold">Observacion</label>
                  <textarea name="" id="" className="border border-slate-400 p-2 text-lg">

                  </textarea>
                  <input type="submit" className="text-white font-bold bg-sky-500 p-2 border-sm hover:bg-sky-800 transition-all cursor-pointer " value={'Registrar Cita'}/>
              </form>
            </div>
          }
        </section>
      </Modal>
    </section>
  );
};
