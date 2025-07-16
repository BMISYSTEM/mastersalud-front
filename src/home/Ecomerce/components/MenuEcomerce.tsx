import { Link } from "react-router-dom";
import logo from "../assets/logomastersinfondo.png";
import { useState } from "react";
import { filtrosSelected } from "../EcomerceLayout";
import { Marcas } from "../interfaces/MarcasInterface";
import { Promocion } from "../interfaces/PromocionesInterface";
import { Succe } from "../interfaces/ProductosInterface";

interface props {
  setBuscador: React.Dispatch<React.SetStateAction<string>>;
  setCarrito: React.Dispatch<React.SetStateAction<boolean>>;
  carrito: boolean;
  deleteFiltro: (id: number, option: number) => void;
  setfiltrosOption: React.Dispatch<React.SetStateAction<number>>;
  setfiltrosSelect: React.Dispatch<React.SetStateAction<filtrosSelected[]>>;
  filtrosSelect: filtrosSelected[];
  filtrosOption: number;
  allMarcas: Marcas;
  allPromocion: Promocion;
}
export const MenuEcomerce = ({
  setBuscador,
  setCarrito,
  carrito,
  deleteFiltro,
  setfiltrosOption,
  filtrosSelect,
  filtrosOption,
  allMarcas,
  setfiltrosSelect,
  allPromocion,
}: props) => {

  const [expands, setExpands] = useState(false);

  const cart:Succe[] = localStorage.getItem("cart") 
                    ? JSON.parse(localStorage.getItem("cart") as string) 
                    : [];
  const cantidadItems = cart ? cart.length : 0;
  return (
    <>
      {/* menu desktop */}
      <nav className="backdrop-blur-2xl z-50  w-full  md:flex-row justify-between items-center gap-5 p-2 border-b md:flex hidden ">
        {/* logo */}
        <Link to={"/"} className="w-40  ">
          <img src={logo} alt="" className="w-32" />
        </Link>
        {/* icono de categorias */}
        <form action="" className="w-full p-2 flex justify-center ">
          <div className="w-[50rem] relative">
            <button type="submit" className="absolute ml-[92%] w-6 h-6 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <input
              type="text"
              onChange={(e) => setBuscador(e.target.value)}
              className="border w-full p-2 h-10 border-sky-500 rounded-sm"
              placeholder="Buscar..."
            />
          </div>
        </form>
        <div className="w-40 p-2  flex justify-end">
          <button onClick={() => setCarrito(!carrito)} className="text-sky-600">
            <p className="p-1 mt-5 text-xs flex justify-center bg-red-500 rounded-full text-white w-5 h-5 text-center items-center absolute z-50">
              {cantidadItems}
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* menu mobil */}
      <nav
        className={`${
          expands ? "h-screen " : "h-40"
        } md:hidden transition-all backdrop-blur-2xl z-30 fixed   w-full flex-col items-center gap-5 p-1 border-b flex overflow-hidden`}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full flex flex-row gap-2">
            {/* boton de cerrar o abrir */}
            <button
              onClick={() => setExpands(!expands)}
              className="transition-all"
            >
              {expands ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-10 h-10 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-10 h-10 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
            {/* logo */}
            <Link to={"/"} className=" ">
              <img src={logo} alt="" className="w-20" />
            </Link>
          </div>
          <div className="w-40 p-2  flex justify-end">
            <button
              onClick={() => setCarrito(!carrito)}
              className="text-sky-600 relative"
            >
              <p className="p-1 text-xs bg-red-500 rounded-full text-white w-4 h-4 absolute z-50 text-center flex items-center">
                {cantidadItems}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* barra de busqueda si expand es true no se muestra la barra */}
        {expands ? null : (
          <form action="" className="w-full p-2 flex justify-center ">
            <div className="w-[50rem] relative">
              <button type="submit" className="absolute ml-[92%] w-6 h-6 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <input
                type="text"
                onChange={(e) => setBuscador(e.target.value)}
                className="border w-full p-2 h-10 border-sky-500 rounded-sm"
                placeholder="Buscar..."
              />
            </div>
          </form>
        )}
        {/* filtros  */}
        <div className=" w-full full flex  flex-col gap-2">
          {filtrosSelect.length > 0 ? <p>Filtros aplicados</p> : null}
          <div className="w-auto flex flex-wrap gap-2">
            {filtrosSelect.map((filtro, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-2 text-sm justify-between border p-1 rounded-lg border-sky-500 bg-sky-500/30 text-sky-800 font-bold"
              >
                <p>{filtro.nombre}</p>
                <button
                  onClick={() => deleteFiltro(filtro.id, filtro.option)}
                  className="hover:scale-105  transition-all border p-1 text-xs w-6 h-6 border-red-500 bg-red-500/30 text-red-800 font-bold rounded-full"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-slate-700">Filtrar por:</p>
          <button
            onClick={() => setfiltrosOption(1)}
            className="w-full p-2 tewxt-sm flex justify-between items-center bg-sky-500/20 text-sky-800 rounded-sm"
          >
            <p>Marca</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {filtrosOption === 1 ? (
            <div className="p-1 flex flex-col text-sm">
              {allMarcas?.succes?.map((marca, index) => (
                <button
                  onClick={() =>
                    setfiltrosSelect([
                      ...filtrosSelect,
                      { id: marca.id, nombre: marca.nombre, option: 1 },
                    ])
                  }
                  key={index}
                  className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
                >
                  {marca.nombre}
                </button>
              ))}
            </div>
          ) : null}
          <button
            onClick={() => setfiltrosOption(2)}
            className="w-full p-2 tewxt-sm flex justify-between items-center bg-sky-500/20 text-sky-800 rounded-sm"
          >
            <p>Precio</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {filtrosOption === 2 ? (
            <div className="p-1 flex flex-col text-sm">
              <button
                onClick={() =>
                  setfiltrosSelect([
                    ...filtrosSelect,
                    { id: 1, nombre: "$0 a $10,000", option: 2 },
                  ])
                }
                className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
              >
                $0 a $10,000
              </button>
              <button
                onClick={() =>
                  setfiltrosSelect([
                    ...filtrosSelect,
                    { id: 2, nombre: "$10,000 a $50,000", option: 2 },
                  ])
                }
                className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
              >
                $10,000 a $50,000
              </button>
              <button
                onClick={() =>
                  setfiltrosSelect([
                    ...filtrosSelect,
                    { id: 3, nombre: "$50,000 a $100,000", option: 2 },
                  ])
                }
                className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
              >
                $50,000 a $100,000
              </button>
              <button
                onClick={() =>
                  setfiltrosSelect([
                    ...filtrosSelect,
                    { id: 4, nombre: "Superior a $100,000 ", option: 2 },
                  ])
                }
                className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
              >
                Superior a $100,000
              </button>
            </div>
          ) : null}
          <button
            onClick={() => setfiltrosOption(3)}
            className="w-full p-2 tewxt-sm flex justify-between items-center bg-sky-500/20 text-sky-800 rounded-sm"
          >
            <p>Descuento del dia</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {filtrosOption === 3 ? (
            <div className="p-1 flex flex-col text-sm">
              {allPromocion?.succes?.map((promo, index) => (
                <button
                  onClick={() =>
                    setfiltrosSelect([
                      ...filtrosSelect,
                      { id: promo.id, nombre: promo.nombre, option: 3 },
                    ])
                  }
                  key={index}
                  className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
                >
                  {promo.nombre}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};
