import { useState } from 'react'
import ReactModal from 'react-modal'
import { ModalNewProduct } from './components/ModalNewProduct'
import { ListProducts } from '../components/ListProducts';
interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    promotion: string;
    status: string;
  }
export const ProductosLayout = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([
      { id: 1, name: 'Producto 1', brand: 'Marca 1', price: 100 },
      { id: 2, name: 'Producto 2', brand: 'Marca 2', price: 200 },
    ]);
    const addProduct = (product: Product) => {
      setProducts([...products, { ...product, id: products.length + 1 }]);
      setModalIsOpen(false);
    };
  return (
    <>
    <ListProducts products={products} />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setModalIsOpen(true)}
        >
          Crear Nuevo Producto
        </button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <ModalNewProduct onSubmit={addProduct} />
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
