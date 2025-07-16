import  { useState } from 'react'
import ReactModal from 'react-modal';
import { Caracteristicas } from '../Caracteristicas';
import { clienteAxios } from '../../../../config/axios';
import { toast } from 'react-toastify';
interface props {
    succes:Caracteristicas;
    mutate:()=>void

}
const ListCaracteristicas = ({ mutate,succes}:props) => {
    const token = localStorage.getItem('token')
    const [loadingDelete, setDelete] = useState<boolean>(false);
    const [modalUpdate,setModalUpdate] = useState(false)

    const deleteMarca = async (id: number) => {
        const datos = {
          id: id,
        };
        try {
          setDelete(true);
          const {} = await clienteAxios.post("/api/caracteristica/delete", datos, {
            headers: {
              Authorization: `Bearer ${token}`,
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

    const updateCaracteristica = async(nombre:string,id:number)=>
    {
      toast.promise(
        clienteAxios.post('/api/caracteristica/update',{nombre:nombre,id:id},{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }),
        {
          error:'Se genero un error',
          pending:'Actualizando',
          success:'Actualizado con exito'
        }
      )
    }
  return (
    <div>
      <p>{loadingDelete ? "Se esta eliminando Una marca" : null}</p>
      <h2 className="text-2xl font-semibold">
        Lista de Caracteristicas:{" "}
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
            {succes?.succes?.map((caract) => (
              <tr
                key={caract.id}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="py-3 px-6 text-gray-700">{caract.id}</td>
                <td className="py-3 px-6 text-gray-700 bg-slate-300" contentEditable={true}
                onBlur={(e)=>{
                  if(e.target.textContent){
                    updateCaracteristica(e.target.textContent,caract.id)
                  }
                }}>{caract.nombre}</td>
                <td className="py-3 px-6 text-gray-700 w-full flex flex-row gap-4">
                  <button 
                  onClick={() => deleteMarca(caract.id)}
                  >
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
            {/* <ModalUpdateMarca  id={idSelect ? idSelect : 0}  /> */}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setModalUpdate(false)}
            >
              Cerrar
            </button>
          </div>
        </ReactModal>
    </div>
  )
}

export default ListCaracteristicas
