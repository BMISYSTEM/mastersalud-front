import { useState } from "react";
import ReactModal from "react-modal";
import { ListaPromociones } from "./components/ListaPromociones";
import { ModalNewPromocion } from "./components/ModalNewPromocion";

interface Promociones {
    id:number,
    nombre:string,
    id_producto:number,
    nombre_producto:string,
    descuento:number,
    estado:string
}

export const PromocionesLayout = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [promociones, SetPromociones] = useState<Promociones[]>([
      { id: 1, nombre: 'Marca 1',id_producto:1,nombre_producto:'aspirina', descuento:20,estado:'activo' },
      { id: 2, nombre: 'marca 2',id_producto:1,nombre_producto:'aspirina', descuento:30,estado:'activo'},
    ]);
    const addPromocion = (promocion: {nombre:string,porcentaje:number}) => {
      console.log(promocion)
        // SetPromociones([...promociones, { ...promocion, id: promociones.length + 1 }]);
      setModalIsOpen(false);
    };
  return (
    <>
        <ListaPromociones promocion={promociones} />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setModalIsOpen(true)}
        >
          Crear Nueva Promocion
        </button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <ModalNewPromocion onSubmit={addPromocion} />
                {/* <ModalNewProduct onSubmit={addProduct} /> */}
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
