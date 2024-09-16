import React from "react";

interface Promociones {
    id:number,
    nombre:string,
    id_producto:number,
    nombre_producto:string,
    descuento:number,
    estado:string
}
interface listPrtomociones {
    promocion:Promociones[]
}
export const ListaPromociones:React.FC<listPrtomociones> = ({promocion}) => {
    return (
        <div>
          <h2 className="text-2xl font-semibold">Lista de Promociones</h2>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Id Producto</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre Producto</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Descuento</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {promocion.map(promociones => (
                <tr key={promociones.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-700">{promociones.id}</td>
                  <td className="py-3 px-6 text-gray-700">{promociones.nombre}</td>
                  <td className="py-3 px-6 text-gray-700">{promociones.id_producto}</td>
                  <td className="py-3 px-6 text-gray-700">{promociones.nombre_producto}</td>
                  <td className="py-3 px-6 text-gray-700">{promociones.descuento}</td>
                  <td className="py-3 px-6 text-gray-700">
                    <span className={`px-2 py-1 rounded ${promociones.estado === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {promociones.estado}
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
