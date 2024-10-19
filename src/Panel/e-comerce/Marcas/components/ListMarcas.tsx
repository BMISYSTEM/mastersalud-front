
import { useState } from "react";
import { clienteAxios } from "../../../../config/axios";
import useMarca from "../useMarcas/useMarca";
import ReactModal from "react-modal";
import ModalUpdateMarca from "./ModalUpdateMarca";
import { toast } from "react-toastify";

export interface Marcas {
  succes: Succe[];
}
export interface Succe {
  id: number;
  nombre: string;
  created_at: Date;
  updated_at: Date;
}
export const ListMarcas = ({ succes }: Marcas) => {
  const { mutate  } = useMarca();
  const [loadingDelete, setDelete] = useState<boolean>(false);
  const [idSelect,setIdSelect] = useState<number|null>(null)
  const [modalUpdate,setModalUpdate] = useState(false)
  const deleteMarca = async (id: number) => {
    const datos = {
      id: id,
    };
    try {
      setDelete(true);
      const {  } = await clienteAxios.post("/api/marcas/delete", datos, {
        headers: {
          Authorization: `Bearer 2|sSrE8JpdOfrbrSppFU9CJVqYL6ECpxpiqfhufSPd60257f02`,
        },
      });
      await mutate();
      setDelete(false);
    } catch (error) {
      console.log(error)
      toast.error('Se genero un error al eliminarlo, verifique que esta marca no este asignada a un producto');
    }finally{
      setDelete(false);
    }
  };
  const openModalUpdate = async(id:number) =>{
    setIdSelect(id)
    setModalUpdate(true)
  }
  return (
    <div>
      <p>{loadingDelete ? "Se esta eliminando Una marca" : null}</p>
      <h2 className="text-2xl font-semibold">
        Lista de Marcas:{" "}
        <p>{loadingDelete ? "Se esta eliminando Una marca" : null}</p>
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                ID
              </th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                Nombre
              </th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {succes?.map((marcas) => (
              <tr
                key={marcas.id}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="py-3 px-6 text-gray-700">{marcas.id}</td>
                <td className="py-3 px-6 text-gray-700">{marcas.nombre}</td>
                <td className="py-3 px-6 text-gray-700 w-full flex flex-row gap-4">
                  <button onClick={() => deleteMarca(marcas.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                  <button onClick={()=>{openModalUpdate(marcas.id)}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactModal
          isOpen={modalUpdate}
          onRequestClose={() => setModalUpdate(false)}
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <ModalUpdateMarca  id={idSelect ? idSelect : 0}  />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setModalUpdate(false)}
            >
              Cerrar
            </button>
          </div>
        </ReactModal>
    </div>
  );
};
