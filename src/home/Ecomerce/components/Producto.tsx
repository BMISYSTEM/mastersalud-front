import { toast } from "react-toastify";
import { Productos, Succe } from "../interfaces/ProductosInterface"
import { useEcomerce } from "../hooks/useEcomerce";

export const Producto= ({succes}:Productos) => {
    const baseUrl = import.meta.env.VITE_URL_API
    const {actualizaCart} = useEcomerce()

    const addCar = (producto:Succe) =>
    {
        // Obtener el carrito del localStorage (si existe)
        let cart = localStorage.getItem("cart") 
                    ? JSON.parse(localStorage.getItem("cart") as string) 
                    : [];
        // Agregar el producto al array del carrito
        const newProduct = {...producto,cantidad:1}
        cart.push(newProduct);
        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success('Producto agregado al carrito')
        actualizaCart()
    }
    
  return (
    <div className="cursor-pointer border hover:border-sky-500 w-52 h-[24rem] bg-white p-2  rounded-xl flex flex-col gap-2 justify-between">
        <div className='w-full h-40  '>
            <img src={`${baseUrl}/storage/${succes[0].imagen1}`} alt="foto producto" className='w-full h-full object-contain'/>
        </div>
        <div>
            <p className='text-xs text-slate-400 uppercase font-thin'>{succes[0].nombre_marca}</p>
            <p className='text-sm text-sky-500'>{succes[0].nombre}</p>
        </div>
        <p className='text-sm text-slate-400'>{(succes[0].precio).toLocaleString('es-CO',{
            currency:'COP',
            style:'currency'
        })} (Normal)</p>
        <p className='text-lg text-amber-500 font-bold'>{(succes[0].precio -((succes[0].precio * succes[0].porcentaje)/ 100 )  ).toLocaleString('es-CO',{
            currency:'COP',
            style:'currency'
        })}</p>
        <button onClick={()=>addCar(succes[0])} className='w-full flex flex-row items-center gap-1 justify-center bg-sky-500 text-white rounded-xl text-xs font-bold p-1 hover:bg-sky-700 transition-all'>
            <p>Agregar</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
        </button>
    </div>
  )
}
