import { useState } from "react";

export const MotivosList = () => {
    const [newMotivo,setNewMotivo] = useState(0)
  return (
    <section className="w-full h-full md:w-1/4 bg-white p-2 fex flex-col gap-3">
      <div className="w-full flex flex-row justify-between">
        <button onClick={()=>setNewMotivo(newMotivo ? 0 : 1)} className="p-2 text-sm text-white bg-blue-500 hover:bg-blue-800 rounded-sm">
          {newMotivo ? 'Lista' :  'Nuevo motivo'}
        </button>
        <button className="p-2 text-sm text-white bg-red-500 hover:bg-red-800 rounded-sm">
          Cerrar
        </button>
      </div>
      {newMotivo === 0 ? 
        <table>
            <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
                {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_producto</th> */}
                <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Id
                </th>
                {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_promocion</th> */}
                <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Nombre
                </th>
            </tr>
            </thead>
            <tbody>
            {/* {listProductos?.succes.map((prod,index)=>( */}
            {/* <tr key={index}> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.id_producto}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.nombre_produto}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.id_promocion}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.nombre_promocion}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.id_marca}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.nombre_marca}</td>
                                <td className="py-3 px-6 text-gray-700 border ">{prod.cantidad}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{formatMoneda(prod.valor_unitario)}</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.procentaje_aplicado} %</td> */}
            {/* <td className="py-3 px-6 text-gray-700 border "> */}
            {/* {formatMoneda((prod.valor_unitario - (prod.valor_unitario * (prod.procentaje_aplicado / 100))) * prod.cantidad)} */}
            {/* </td> */}
            {/* </tr> */}
            {/* ))} */}
            </tbody>
        </table>
      :
      <p>nuevo producto</p>
        }
    </section>
  );
};
