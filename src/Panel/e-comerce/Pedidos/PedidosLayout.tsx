import { useState } from "react";
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
    const [pedidos] = useState<pedidos[]>([
      { id: 1, nombre: 'julio',estado:'1',apellido:'apellido1',id_producto:1,nombre_producto:'aspirina',telefono:'3184482848',valor:50000  },
      { id: 2, nombre: 'carlos',estado:'1',apellido:'apellido1',id_producto:1,nombre_producto:'aspirina',telefono:'3184482848',valor:50000 },
    ]);
  return (
    <>
        <ListPedidos pedidos={pedidos}/>
    </>
  )
}
