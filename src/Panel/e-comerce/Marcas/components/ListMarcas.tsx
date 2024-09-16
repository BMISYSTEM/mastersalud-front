import React from 'react'
interface marcas{
    id:number,
    nombre:string,
    estado:string
}
interface listMarca{
    marcas:marcas[]
}
export const ListMarcas:React.FC<listMarca> = ({marcas}) => {
  
    return (
        <div>
          <h2 className="text-2xl font-semibold">Lista de Marcas</h2>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {marcas.map(marcas => (
                <tr key={marcas.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-700">{marcas.id}</td>
                  <td className="py-3 px-6 text-gray-700">{marcas.nombre}</td>
                  <td className="py-3 px-6 text-gray-700">
                    <span className={`px-2 py-1 rounded ${marcas.estado === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {marcas.estado}
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
