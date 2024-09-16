import ReactModal from "react-modal";

import { useState } from "react";
import { ListMarcas } from "./components/ListMarcas";
import { ModalNewMarca } from "./components/ModalNewMarca";

interface marcas{
    id:number,
    nombre:string,
    estado:string
}
export const MarcasLayout = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [marcas, setMarcas] = useState<marcas[]>([
      { id: 1, nombre: 'Marca 1',estado:'1'  },
      { id: 2, nombre: 'marca 2',estado:'1' },
    ]);
    const addMarcas = (marca: {name:string}) => {
        console.log(marca)
        // setMarcas([...marcas, { ...marca, id: marcas.length + 1 }]);
      setModalIsOpen(false);
    };
  return (
    <>
        <ListMarcas marcas={marcas}/>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setModalIsOpen(true)}
        >
          Crear Nuevo Marca
        </button>
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
