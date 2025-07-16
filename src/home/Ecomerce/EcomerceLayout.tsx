
import { Producto } from "./components/Producto";
import { useEcomerce } from "./hooks/useEcomerce";
import spiner from "../../assets/spiner.svg";
import { useState } from "react";
import { Productos } from "./interfaces/ProductosInterface";
import { Marcas } from "./interfaces/MarcasInterface";
import { Promocion } from "./interfaces/PromocionesInterface";
import 'animate.css'
import { ToastContainer } from "react-toastify";
import { CarritoCompras } from "./components/CarritoCompras";
import { MenuEcomerce } from "./components/MenuEcomerce";
import { Footer } from "../principal/components/Footer";
import useSWR from "swr";
import { clienteAxios } from "../../config/axios";
export interface filtrosSelected {
  nombre: string;
  id: number;
  option: number;
}

export interface Carateristicasinterface {
  succes: Succe[];
}

export interface Succe {
  id:         number;
  nombre:     string;
  created_at: Date;
  updated_at: Date;
}

export const EcomerceLayout = () => {
  const [filtrosOption, setfiltrosOption] = useState(0);
  const [filtrosSelect, setfiltrosSelect] = useState<filtrosSelected[]>([]);
  const [buscador,setBuscador] = useState('')
  const [carrito,setCarrito] = useState(false)
  const { data, isLoading, marcasIndex, promocionIndex } = useEcomerce();
  const  productIndex: Productos = data?.data;
  let productFilt = productIndex?.succes.filter(prod=>prod.estado!== '0')
  const allMarcas: Marcas = marcasIndex?.data;
  const allPromocion: Promocion = promocionIndex?.data;
  const deleteFiltro = (id:number,option:number) =>{
    const arrayResult = filtrosSelect.filter(filtro => filtro.id != id && filtro.option != option )
    setfiltrosSelect(arrayResult)
  }


  const {data:allCaract} = useSWR('/api/caracteristica/all',()=>
  clienteAxios.get('/api/caracteristica/all'))
  const caract:Carateristicasinterface = allCaract?.data;
  if(filtrosSelect.length > 0 )
  {
    const marca =filtrosSelect.filter(filter=>filter.option === 1 ) 
    if(marca.length > 0 )
    {
        productFilt = productFilt.filter(product=>product.id_marca === marca[0]?.id )
    }

    const precio =filtrosSelect.filter(filter=>filter.option === 2 )
    if(precio.length > 0 )
    {
        if(precio[0]?.id === 1 ) productFilt = productFilt.filter(product=>product.precio < 10000 )
        if(precio[0]?.id === 2 ) productFilt = productFilt.filter(product=>product.precio > 10000  && product.precio < 50000 )
        if(precio[0]?.id === 3 ) productFilt = productFilt.filter(product=>product.precio > 50000  && product.precio < 100000 )
        if(precio[0]?.id === 4 ) productFilt = productFilt.filter(product=>product.precio > 100000   )
    }
    const descuento =filtrosSelect.filter(filter=>filter.option === 3 )
    if(descuento.length > 0 ){
        productFilt = productFilt.filter(product=>product.id_promocion === descuento[0]?.id )
    }

    const caracteris =filtrosSelect.filter(filter=>filter.option === 4 )
    if(caracteris.length > 0 ){
        productFilt = productFilt.filter(product=>product.id_caract === caracteris[0]?.id )
    }



  }

  if(buscador.length > 0 )
  {
    productFilt = productFilt.filter(product =>{
        if( product.nombre.toUpperCase().includes(buscador.toUpperCase())
            || product.nombre_promocion.toUpperCase().includes(buscador.toUpperCase())
            || product.nombre_marca.toUpperCase().includes(buscador.toUpperCase()) 
        ){
            return product;
        }
    })
  }

  

  return (
    <section className="md:mx-5 relative ">
      {/* menu */}
      <MenuEcomerce 
                    carrito={carrito} 
                    setBuscador={setBuscador} 
                    setCarrito={setCarrito}
                    allMarcas={allMarcas}
                    allPromocion={allPromocion}
                    deleteFiltro={deleteFiltro}
                    filtrosOption={filtrosOption}
                    filtrosSelect={filtrosSelect}
                    setfiltrosOption={setfiltrosOption}
                    setfiltrosSelect={setfiltrosSelect}
                    />
      {/* productos */}
      <main className="relative w-full h-full   flex flex-row gap-8 md:mt-2  mb-5 overflow-hidden">
        {carrito ? <CarritoCompras  /> : null }
        {/* filtros */}
        <div className="md:sticky top-0 w-52 h-[40rem] md:flex hidden overflow-auto flex-col gap-2 bg-white z-50">
          {filtrosSelect.length > 0  ? <p>Filtros aplicados</p> : null }
          <div className="w-auto flex flex-wrap gap-2">
            {filtrosSelect.map((filtro,index)=>(
                <div key={index} className="w-full flex flex-row items-center gap-2 text-sm justify-between border p-1 rounded-lg border-sky-500 bg-sky-500/30 text-sky-800 font-bold">
                    <p>{filtro.nombre}</p>
                    <button onClick={()=>deleteFiltro(filtro.id,filtro.option)} className="hover:scale-105  transition-all border p-1 text-xs w-6 h-6 border-red-500 bg-red-500/30 text-red-800 font-bold rounded-full">
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
            <div className="p-1 flex flex-col h-96 text-sm bg-white overflow-auto">
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
            onClick={() => setfiltrosOption(4)}
            className="w-full p-2 tewxt-sm flex justify-between items-center bg-sky-500/20 text-sky-800 rounded-sm"
          >
            <p>Caracteristicas</p>
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
          {filtrosOption === 4 ? (
            <div className="p-1 flex flex-col text-sm h-96 bg-white overflow-auto">
              {caract?.succes?.map((caract, index) => (
                <button
                  onClick={() =>
                    setfiltrosSelect([
                      ...filtrosSelect,
                      { id: caract.id, nombre: caract.nombre, option: 4 },
                    ])
                  }
                  key={index}
                  className="border p-2 text-slate-900 font-bold hover:bg-slate-400"
                >
                  {caract.nombre}
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
        {/* productos */}
        <div className="w-full flex flex-wrap gap-3 md:mt-0 mt-36 md:justify-start   justify-center overflow-hidden">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <img src={spiner} alt="" className="w-10 h-10" />
            </div>
          ) : (
            productFilt.map((prod, index) => (
              <Producto succes={[prod]} key={index} />
            ))
          )}
        </div>
      </main>
      <Footer/>
      <ToastContainer/>
    </section>
  );
};
