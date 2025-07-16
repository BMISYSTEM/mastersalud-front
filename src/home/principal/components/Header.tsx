import React, { useState } from "react";

import Helmet from "react-helmet";
import circulo from "../assets/circulo2.png";
import casa from "../assets/iconoCasa.png";
import camara from "../assets/iconoCamara.png";
import lupa from "../assets/lupa.png";
import { Menu } from "./Menu";
import useSWR from "swr";
import { clienteAxios } from "../../../config/axios";
import { Especialidad } from "../interface/EspecialidadesInterface";
import { useNavigate } from "react-router-dom";
const cities = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Bucaramanga",
  "Manizales",
  "Pereira",
  "Santa Marta",
  "Cúcuta",
  "Ibagué",
  "Villavicencio",
  "Neiva",
  "Armenia",
  "Montería",
  "Popayán",
  "Sincelejo",
  "Riohacha",
  "Tunja",
  "Valledupar",
];
export interface Home {
  succes: SucceHome[];
}

export interface SucceHome {
  id:         number;
  fondo:      string;
  created_at: null;
  updated_at: Date;
}
export const Header: React.FC = () => {
  const baseUrl = import.meta.env.VITE_URL_API;
  const [modalidad, setModalidad] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpenc, setIsOpenc] = useState(false);
  const [selectedc, setSelectedc] = useState<string | null>(null);
  const navigate = useNavigate();
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdownc = () => setIsOpenc(!isOpenc);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  const handleSelectciudad = (option: string) => {
    setSelectedc(option);
    setIsOpenc(false);
  };
  const { data } = useSWR("/api/especialidades/all", () =>
    clienteAxios.get("/api/especialidades/all")
  );

  const busqueda = () =>{
    navigate(`/especialistas/${selectedc ? selectedc : 'todas' }/${selected ? selected : 'todas' }/${modalidad}`)
  }

  const {data:home} =  useSWR('/api/home/all',()=>
    clienteAxios.get('/api/home/all'))
  const homes:Home = home?.data;
  const options:Especialidad = data?.data;
  return (
    <header className="relative  w-full h-screen bg-[#F7F7F7] overflow-hidden flex justify-center md:justify-start">
      <Helmet>
        <title>Medical Group - Home</title>
      </Helmet>
      <Menu />
      <div className="absolute w-42 mt-32">
        <img src={circulo} alt="" />
      </div>
      <div className="absolute  mt-[30%] ml-[60%]">
        <img
          src={circulo}
          alt=""
          className="object-contain p-2 w-full h-full"
        />
      </div>
      {/* buscador */}
      <section className=" absolute md:w-[40rem] w-[95%] h-[25rem] md:mt-[15%] mt-[40%] md:ml-[2%] rounded-lg border-2 bg-[#1C76ED]/20 backdrop-blur-xl  border-sky-600 z-40 flex flex-col gap-3 items-center">
        <p className="text-2xl font-bold  text-center p-2 text-white">
          Pide tu cita
        </p>
        <div className="md:w-1/2 w-5/6 flex flex-row gap-2 justify-between">
          <button
            onClick={() => setModalidad(1)}
            className={`${
              modalidad === 1 ? "bg-green-500 text-white" : "bg-slate-200"
            } p-2  font-bold rounded-sm flex flex-row gap-2 hover:bg-slate-400 transition-all`}
          >
            <img src={casa} alt="" />
            <p>Presencial</p>
          </button>
          <button
            onClick={() => setModalidad(2)}
            className={`${
              modalidad === 2 ? "bg-green-500 text-white" : "bg-slate-200"
            } p-2  font-bold rounded-sm flex flex-row gap-2 hover:bg-slate-400 transition-all`}
          >
            <img src={camara} alt="" />
            <p>Virtual</p>
          </button>
        </div>
        <div className="md:w-2/3 w-[95%] h-full flex flex-col justify-center gap-5 ">
          <div className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="w-full flex justify-between items-center px-4 py-2 bg-slate-200 text-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            >
              {selected ? selected : 'Especialidad'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <ul className="absolute z-10 h-40 overflow-auto mt-2 w-full bg-white rounded-md shadow-lg border">
                {options.succes.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelect(option.nombre)}
                  >
                    {option.nombre}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative w-full">
        <button
          onClick={toggleDropdownc}
          className="w-full flex justify-between items-center px-4 py-2 bg-slate-200 text-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          {selectedc ? selectedc : 'Ciudades'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform transition-transform ${isOpenc ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
  
        {isOpenc && (
          <ul className="absolute z-10 h-40 overflow-auto mt-2 w-full bg-white rounded-md shadow-lg border">
            {cities.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleSelectciudad(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
          <div className="w-full flex justify-center">
            <button onClick={()=>busqueda()} className="px-5 py-2 text-lg rounded-xl font-bold text-white bg-sky-900  flex flex-row gap-2 hover:scale-105 transition-all">
              <img src={lupa} alt="" />
              <p>Buscar</p>
            </button>
          </div>
        </div>
      </section>
      {/* imagen de fondo */}
      <div className="relative w-full h-full flex justify-end z-0 ">
        <img
          src={`${baseUrl}/storage/${homes?.succes?.[0]?.fondo}`}
          alt="Imagen de doctor atendiendo una cirugia"
          className=" object-contain md:object-fill h-full  w-full  "
        />
      </div>
    </header>
  );
};
