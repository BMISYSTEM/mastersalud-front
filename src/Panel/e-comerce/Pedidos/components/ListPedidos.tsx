import React from "react";
import { Producto } from '../../../../home/Ecomerce/components/Producto';

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

interface listPedido{
    pedidos:pedidos[]
}

export const ListPedidos:React.FC<listPedido> = ({pedidos}) => {
    return (
        <div>
          <h2 className="text-2xl font-semibold">Lista de Pedidos</h2>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Id</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">apellido</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">telefono</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">id Producto</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Producto</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">valor</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map(pedidos => (
                <tr key={pedidos.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-700">{pedidos.id}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.nombre}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.apellido}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.telefono}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.id_producto}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.nombre_producto}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.valor}</td>
                  <td className="py-3 px-6 text-gray-700">
                    <span className={`px-2 py-1 rounded ${pedidos.estado === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {pedidos.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
}
