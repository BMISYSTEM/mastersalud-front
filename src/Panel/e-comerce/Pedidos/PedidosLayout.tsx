import { useState } from "react";
import { ListPedidos } from "./components/ListPedidos";
import { usePedidos } from "./hooks/usePedidos";
import ReactModal from "react-modal";
interface pedidos{
    id:number,
    nombre:string,
    apellido:string,
    telefono:string,
    id_producto:number,
    nombre_producto:string,
    valor:number,
    estado:string
}
import spiner from './assets/spiner.svg'
import { Pedidos } from "./interface/interfacePedidos";
export const PedidosLayout = () => {
  const {index,isLoading} = usePedidos()
    const pedidos:Pedidos = index?.data;
  return (
    <>
        {isLoading ? 
         null
        : <ListPedidos succes={pedidos.succes}/>
        }
        <ReactModal
        isOpen={isLoading}
        className="fixed inset-0 flex items-center justify-center "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
         <img src={spiner} alt="" className="w-10 h-10"/>
      </ReactModal>
    </>
  )
}
