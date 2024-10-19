import ReactModal from "react-modal";

import {  useState } from "react";
import { ListMarcas } from "./components/ListMarcas";
import { ModalNewMarca } from "./components/ModalNewMarca";
import useMarca from "./useMarcas/useMarca";

// Generated by https://quicktype.io

export interface Marcas {
  succes: Succe[];
}
export interface Succe {
  id:         number;
  nombre:     string;
  created_at: Date;
  updated_at: Date;
}

export const MarcasLayout = () => {
    const {data,isLoading} = useMarca() 
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [loadingDelete] = useState<boolean>(false)
    const addMarcas = () => {
      setModalIsOpen(false);
    };
    const marcasAll:Marcas = data?.data;



  return (
    <>
        <p>{isLoading ? 'Cargando informacion' : loadingDelete ? 'Eliminando marca' : null }</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setModalIsOpen(true)}
        >
          Crear Nuevo Marca
        </button>
        <ListMarcas succes={marcasAll?.succes}/>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <ModalNewMarca onSubmit={addMarcas} />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setModalIsOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </ReactModal>
    
    </>
  )
}
