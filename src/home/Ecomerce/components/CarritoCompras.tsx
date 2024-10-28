import { toast } from "react-toastify";
import React, {  useEffect, useState } from "react";
import { useEcomerce } from "../hooks/useEcomerce";
import ReactModal from "react-modal";
import { v4 } from "uuid";
import 'animate.css'
import { clienteAxios } from "../../../config/axios";
export const CarritoCompras = () => {
    const token = localStorage.getItem('token')
  const baseUrl = import.meta.env.VITE_URL_API;
  const {
    valPago,
    productCarr,
    EliminarProductCart,
    setProdutCart,
    actualizaCart,
  } = useEcomerce();
  const [newCompra,setNewCompra] = useState(false)
  // datos de compra ----------------------------------------
  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const [email,setEmail] = useState('')
  const [telefono,setTelefono] = useState('')
  const [direccion,SetDireccion] = useState('')
  const [ciudad,setciudad] = useState('')
  // --------------------------------------------------------
  const deleteProduct = (id: number) => {
    EliminarProductCart(id);
    toast.success("Se elimino el producto");
  };

  const incrementOrDecrement = (id: number, action: string) => {
    // Buscar el producto en el carrito por su id
    const productIndex = productCarr.findIndex(
      (product) => Number(product.id) === Number(id)
    );
    if (productIndex !== -1) {
      // Incrementar o decrementar según la acción
      if (action === "incrementar") {
        productCarr[productIndex].cantidad += 1; // Incrementar la cantidad
      } else if (action === "decrementar") {
        productCarr[productIndex].cantidad -= 1; // Decrementar la cantidad
        // Evitar que la cantidad sea menor a 1
        if (productCarr[productIndex].cantidad < 1) {
          productCarr[productIndex].cantidad = 1;
        }
      }

      // Actualizar el carrito en el localStorage
      localStorage.setItem("cart", JSON.stringify(productCarr));
      actualizaCart();
    }
  };
//   pago wompy
const pagarahora = async(e:React.FormEvent) =>{
    e.preventDefault()
    
    if(nombre !== '' && apellido !== '' && email !== '' && direccion !== '' && telefono !== '' && ciudad !== '')
    {
      const totalpagarr = valPago * 100
      const fecha =  Date.now()
      const number =  Math.floor(Math.random() * 1000);
      const llave = fecha + number
      var checkout = new WidgetCheckout({
          currency: 'COP',
          amountInCents: totalpagarr,
          reference: `${llave}`,
          publicKey: 'pub_test_KJDAa7ezjF48PGwrQDrJLHT0rIZ2HTsR',
        })
      checkout.open(function ( result:any ) {
          var transaction = result.transaction
          const dataCompra = {
            id:transaction.id,
            status:transaction.status,
            reference:transaction.reference,
            productos:productCarr,
            valort:valPago,
            token:v4(),
            nombre:nombre,
            apellido:apellido,
            email:email,
            ciudad:ciudad,
            direccion:direccion,
            telefono:telefono
          }
          toast.promise(guardarCompra(dataCompra),{
            error:'Se genero un error al realizar tu compra comunicate con soporte',
            pending:'Almacenando compra',
            success:'Se registro el movimiento de forma correcta, en la bandeja de tu correo tendras la factura, con el codigo de la factura podras consultar el estado de tu pedido'
          })
        })
    }else{
      toast.warning('Debes completar toda la informacion solicitada')
    } 
  }
  const guardarCompra = async(datos:any) =>{2
    const {} = await clienteAxios.post('/api/compras/new',datos,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  }
  useEffect(() => {
    setProdutCart(JSON.parse(localStorage.getItem("cart") as string));
  }, []);
  return (
    <div
      className={`  bg-slate-100 h-auto  animate__animated  animate__fadeInRight absolute w-96 z-40 md:z-0 md:mt-0 mt-32 overflow-auto  md:ml-[75%] border-l flex flex-col gap-2 p-2`}
    >
      <h2 className="text-lg font-bold  text-sky-500">Carrito de compras</h2>
      {productCarr?.length > 0 ? (
        <>
          {productCarr?.map((product, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 border border-sky-500  p-1"
            >
              <div className="w-1/2">
                <img
                  src={baseUrl + "/storage/" + product.imagen1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-full flex flex-col gap-2 text-sm">
                <p>{product.nombre_marca}</p>
                <p>{product.nombre}</p>
                <p className="text-sm text-slate-300 font-sans">
                  precio Nomal:
                  {product.precio.toLocaleString("es-CO", {
                    currency: "COP",
                    style: "currency",
                  })}
                </p>
                <p className="text-xl font-bold text-amber-500">
                  {(
                    product.precio -
                    product.precio * (product.porcentaje / 100)
                  ).toLocaleString("es-CO", {
                    currency: "COP",
                    style: "currency",
                  })}
                </p>
                <p>Descuento aplicado: {product.porcentaje}%</p>
                <div className="w-full flex flex-row gap-2">
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="border p-1 border-red-500 bg-red-500/30 text-red-800 font-bold hover:bg-red-300 transition-all"
                  >
                    Eliminar
                  </button>
                  {/* cantidad */}
                  <div className="w-full flex flex-row">
                    <button
                      onClick={() =>
                        incrementOrDecrement(product.id, "incrementar")
                      }
                      className="border p-1 border-green-500 bg-green-500/30 text-green-800 font-bold hover:bg-red-300 transition-all"
                    >
                      +
                    </button>
                    <p className="w-6 h-full text-center  flex items-center justify-center border">
                      {product.cantidad}
                    </p>
                    <button
                      onClick={() =>
                        incrementOrDecrement(product.id, "decrementar")
                      }
                      className="border p-1 border-red-500 bg-red-500/30 text-red-800 font-bold hover:bg-red-300 transition-all"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={()=>setNewCompra(true)} className="bg-sky-500/30 border border-sky-500 rounded-xl text-sky-700 font-bold p-2 ">
            Pagar{" "}
            {valPago.toLocaleString("es-CO", {
              currency: "COP",
              style: "currency",
            })}
          </button>
        </>
      ) : (
        <p>No hay Productos Agregados al carro</p>
      )}
      <ReactModal isOpen={newCompra}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="animate__animated animate__fadeIn fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <section className="animate__animated animate__fadeIn w-96 h-full bg-white rounded-sm overflow-auto shadow-xl">
          <div className="w-full flex flex-row justify-end p-2">
            <button onClick={()=>setNewCompra(false)} className="hover:text-red-500 hover:scale-105 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <div className="p-2">
            <p className="text-xl font-bold text-slate-500">Registra la informacion de la compra</p>
          </div>
          <form onSubmit={pagarahora} className="w-full flex flex-col gap-2 text-sm p-2">
            <label htmlFor="">Nombre</label>
            <input type="text" required onChange={(e)=>setNombre(e.target.value)} value={nombre} className="border p-2 rounded-sm" />
            <label htmlFor="">Apellido</label>
            <input type="text" required onChange={(e)=>setApellido(e.target.value)} value={apellido} className="border p-2 rounded-sm" />
            <label htmlFor="">Email</label>
            <input type="email" required onChange={(e)=>setEmail(e.target.value)} value={email} className="border p-2 rounded-sm" />
            <label htmlFor="">Telefono</label>
            <input type="tel" required onChange={(e)=>setTelefono(e.target.value)} value={telefono} className="border p-2 rounded-sm" />
            <label htmlFor="">Ciudad</label>
            <input type="text" required onChange={(e)=>setciudad(e.target.value)} value={ciudad} className="border p-2 rounded-sm" />
            <label htmlFor="">Direccion</label>
            <input type="text" required onChange={(e)=>SetDireccion(e.target.value)} value={direccion} className="border p-2 rounded-sm" />
            <input type="submit" value={'Completar Compra'}
             className="bg-sky-500 p-2 text-white  font-bold"/>
          </form>
        </section>
      </ReactModal>
    </div>
  );
};
