import { useState } from "react";
import ReactModal from "react-modal"
import { ModalNewProduct } from "../Productos/components/ModalNewProduct";
import { ListPedidos } from "./components/ListPedidos";
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
export const PedidosLayout = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pedidos, setPedidos] = useState<pedidos[]>([
      { id: 1, nombre: 'julio',estado:'1',apellido:'apellido1',id_producto:1,nombre_producto:'aspirina',telefono:'3184482848',valor:50000  },
      { id: 2, nombre: 'carlos',estado:'1',apellido:'apellido1',id_producto:1,nombre_producto:'aspirina',telefono:'3184482848',valor:50000 },
    ]);
    const addProduct = (pedido: pedidos) => {

        setPedidos([...pedidos, { ...pedido, id: pedidos.length + 1 }]);
      setModalIsOpen(false);
    };
  return (
    <>
        <ListPedidos pedidos={pedidos}/>
    </>
  )
}
