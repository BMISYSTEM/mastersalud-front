import  { useState } from "react";
import usePromociones from "../usePromociones/usePromociones";
import { toast } from "react-toastify";
import { ModalUpdatePromociones } from "./ModalUpdatePromociones";
import ReactModal from "react-modal";

interface Promociones {
    id:number,
    nombre:string,
    porcentaje:number,
    activo:number
}
interface listPrtomociones {
    promocion:Promociones[]
}
export const ListaPromociones = ({promocion}:listPrtomociones) => {
  const [updatePromocion,setUpdatePromocion] = useState(false)
  const [idselect,setIdSelect] = useState(0);
  const {deletePromo} = usePromociones()
    const deletePromocion = (id:number) =>{
      const datos ={
        id:id
      }
      toast.promise(deletePromo(datos),
      {
        error:'Se genero un error inesperado comuniquese con soporte',
        pending:'eliminando promocion',
        success:'Se elimino la promocion de forma correcta'
      })
    }
    const openModalUpdate = (id:number) =>{
      setIdSelect(id);
      setUpdatePromocion(true);
    }
    return (
        <div>
          <h2 className="text-2xl font-semibold">Lista de Promociones</h2>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Descuento</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Estado</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {promocion.map(promociones => (
                <tr key={promociones.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-700">{promociones.id}</td>
                  <td className="py-3 px-6 text-gray-700">{promociones.nombre}</td>
                  <td className="py-3 px-6 text-gray-700">{promociones.porcentaje}</td>
                  <td className="py-3 px-6 text-gray-700">
                    <span className={`px-2 py-1 rounded ${promociones.activo === 1 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {promociones.activo  === 1 ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="flex flex-row  items-center p-2 gap-2">
                    <button onClick={()=>deletePromocion(promociones.id)} className=" flex items-center justify-center w-8 h-8 rounded-full bg-green-200 hover:bg-slate-500  hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                    <button onClick={()=>openModalUpdate(promociones.id)} className="  flex items-center justify-center w-8 h-8 rounded-full bg-amber-200 hover:bg-slate-500 hover:text-white transition-all ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactModal
          isOpen={updatePromocion}
          onRequestClose={() => setUpdatePromocion(false)}
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <ModalUpdatePromociones id={idselect}/>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setUpdatePromocion(false)}
            >
              Cerrar
            </button>
          </div>
        </ReactModal>
        </div>
      );
  
}
