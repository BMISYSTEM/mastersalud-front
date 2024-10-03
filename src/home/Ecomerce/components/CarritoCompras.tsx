import { toast } from "react-toastify";
import { useEffect } from "react";
import { Succe, useEcomerce } from "../hooks/useEcomerce";


export const CarritoCompras = () => {
    const baseUrl = import.meta.env.VITE_URL_API
    const {valPago,productCarr,EliminarProductCart,setProdutCart,actualizaCart} = useEcomerce()
    const deleteProduct = (id:number) =>
    {
        EliminarProductCart(id)
        toast.success('Se elimino el producto')
    }

    const incrementOrDecrement = (id:number,action:string) =>{
        // Buscar el producto en el carrito por su id
        const productIndex = productCarr.findIndex((product) => Number(product.id) === Number(id));
        console.log(productIndex)
        console.log(productCarr[productIndex].cantidad)
        if (productIndex !== -1) {
            // Incrementar o decrementar según la acción
            if (action === 'incrementar') {
                productCarr[productIndex].cantidad += 1;  // Incrementar la cantidad
            } else if (action === 'decrementar') {
                productCarr[productIndex].cantidad -= 1;  // Decrementar la cantidad
            // Evitar que la cantidad sea menor a 1
            if (productCarr[productIndex].cantidad < 1) {
                productCarr[productIndex].cantidad = 1;
            }
            }

            // Actualizar el carrito en el localStorage
            console.log(productCarr)
            localStorage.setItem("cart", JSON.stringify(productCarr));
            actualizaCart()
    }
}


    useEffect(()=>{
        setProdutCart(JSON.parse(localStorage.getItem('cart') as string))
      },[])
  return (
    <div className={`  bg-slate-100   animate__animated  animate__fadeInRight absolute w-96 h-full  ml-[75%] border-l flex flex-col gap-2 p-2`}>
            <h2 className="text-lg font-bold  text-sky-500">Carrito de compras</h2>
            {productCarr?.length > 0  ? 
                <>
                    {productCarr?.map((product,index)=>(
                        <div key={index} className="flex flex-row gap-2 border border-sky-500  p-1">
                            <div className="w-1/2">
                                <img src={baseUrl +'/storage/'+product.imagen1} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="w-full h-full flex flex-col gap-2 text-sm">
                                <p>{product.nombre_marca}</p>
                                <p>{product.nombre}</p>
                                <p className="text-sm text-slate-300 font-sans">precio Nomal:{(product.precio).toLocaleString('es-CO',{
                                    currency:'COP',
                                    style:'currency'
                                }) }</p>
                                <p className="text-xl font-bold text-amber-500">{(product.precio - ((product.precio * (product.porcentaje/100)) )).toLocaleString('es-CO',{
                                    currency:'COP',
                                    style:'currency'
                                })}</p>
                                <p>Descuento aplicado: {product.porcentaje}%</p>
                                <div className="w-full flex flex-row gap-2">
                                    <button onClick={()=>deleteProduct(product.id)} className="border p-1 border-red-500 bg-red-500/30 text-red-800 font-bold hover:bg-red-300 transition-all">
                                        Eliminar
                                    </button>
                                    {/* cantidad */}
                                    <div className="w-full flex flex-row">
                                        <button onClick={()=>incrementOrDecrement(product.id,'incrementar')} className="border p-1 border-green-500 bg-green-500/30 text-green-800 font-bold hover:bg-red-300 transition-all">
                                            +
                                        </button>
                                        <p className="w-6 h-full text-center  flex items-center justify-center border">{product.cantidad}</p>
                                        <button onClick={()=>incrementOrDecrement(product.id,'decrementar')} className="border p-1 border-red-500 bg-red-500/30 text-red-800 font-bold hover:bg-red-300 transition-all">
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    ))}
                    <button className="bg-sky-500/30 border border-sky-500 rounded-xl text-sky-700 font-bold p-2 ">
                        Pagar  {(valPago).toLocaleString('es-CO',{currency:'COP',style:'currency'})}
                    </button>
                
                </>
            :

            <p>No hay Productos Agregados al carro</p>
            
            }
        </div>
  )
}
