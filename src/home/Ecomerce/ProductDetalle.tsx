import { Link, useNavigate, useParams } from "react-router-dom"
import { Productos, Succe } from "./interfaces/ProductosInterface"
import { useEcomerce } from "./hooks/useEcomerce"
import { formatMoneda } from "../../config/configMoneda"
import { Footer } from "../principal/components/Footer"
import logo from "./assets/logo.png";
import { toast, ToastContainer } from 'react-toastify';
export const ProductDetalle = () => {
    const {id} = useParams()
    const baseUrl = import.meta.env.VITE_URL_API
  const { data, isLoading} = useEcomerce();
  const  productIndex: Productos = data?.data;
  const productFilt = productIndex?.succes.filter(prod=>prod.id === Number(id))
  const navigate = useNavigate();
  const addCar = (producto:Succe) =>
    {
        // Obtener el carrito del localStorage (si existe)
        const cart:Succe[] = localStorage.getItem("cart") 
                    ? JSON.parse(localStorage.getItem("cart") as string) 
                    : [];
        // Agregar el producto al array del carrito
        const newProduct = {...producto,cantidad:1}
        if(cart.find((prod)=>prod.id === producto.id )){
            toast.warning('El producto ya existe en el carrito')
        }else{
            cart.push(newProduct);
            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            toast.success('Producto agregado al carrito')
            setTimeout(() => {
              navigate('/e-comerce')
            }, 1000);
        }
    }
    const handleTexto = (text:string) =>{
      if(text)
      {
        const textoFormateado  = text.replace(/\*\*(.*?)\*\*/g, '<span style="font-weight: bold;">$1</span>')
        return textoFormateado
      }
      return '';
    }
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="w-full flex flex-row p-2 gap-5">
        <Link to={"/"} className=" ">
            <img src={logo} alt="" className="w-20" />
        </Link>
        <Link to={"/e-comerce"} className="p-2 text-sm font-bold flex items-center border-2 border-blue-500 bg-blue-500/20 rounded-lg hover:text-white  text-blue-500 hover:bg-blue-700 hover:scale-105 transition-all">
          Volver al Listado
        </Link>
      </div>
      { isLoading ? 
      
        <p>Cargando la informacion...</p>
        :
        <div className="w-full h-full flex md:flex-row flex-col gap-2 p-5 justify-center ">
            {/* imagen */}
            <div className="md:w-1/3 w-full h-[30rem] p-2 border-2 rounded-xl border-blue-500/50">
              <img src={`${baseUrl}/storage/${productFilt[0].imagen1}`} className="w-full h-full object-contain" />
            </div>
            <div className="md:w-1/2 w-full h-full p-2 flex flex-col gap-3 justify-between">
              <p className="uppercase text-slate-600 font-thin">{productFilt[0].nombre_marca}</p>
              <p className="text-3xl text-blue-500 font-bold">{productFilt[0].nombre}</p>
              <p className="font-thin line-through text-xl text-slate-500 mt-10">{formatMoneda(productFilt[0].precio)} normal</p>
              <div className="w-full flex flex-row items-center gap-5">
                <p className="text-3xl font-bold text-amber-500">{formatMoneda((productFilt[0].precio - (productFilt[0].precio * productFilt[0].porcentaje)/100))}</p>
                <p className="uppercase p-1 text-xs rounded-xl text-white font-bold bg-amber-500  ">ahora {productFilt[0].porcentaje} % de descuento</p>
              </div>
              <button onClick={()=>addCar(productFilt[0])} className="flex lfex-row gap-2 p-2 bg-green-500 text-white text-center justify-center items-center hover:bg-green-700 transition-all ">
                <p className="text-white text-xl">Agregar al carrito</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              <details className="bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
                <summary className="cursor-pointer font-semibold text-lg text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500">
                  Ficha tecnica
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                <label htmlFor="" style={{ whiteSpace: 'pre-wrap' }} 
                dangerouslySetInnerHTML={{ __html: handleTexto(productFilt[0].ficha_tecnica)  }}/>
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
                <summary className="cursor-pointer font-semibold text-lg text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500">
                  Uso
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  <label htmlFor="" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: handleTexto(productFilt[0].uso_adecuado) }}/>
                </p>
              </details>
              <details className="bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
                <summary className="cursor-pointer font-semibold text-lg text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500">
                  Informacion legal
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                <label htmlFor="" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: handleTexto(productFilt[0].aviso_legal) }}/>
                </p>
              </details>
            </div>
        </div>
        }
        <Footer/>
        <ToastContainer/>
    </section>
  )
}
