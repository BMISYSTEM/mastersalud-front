import { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/outline';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  promotion: string;
  status: string;
}
interface ProductFormProps {
  onSubmit: (product: Product) => void;
}

export const ModalNewProduct: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const [promotion, setPromotion] = useState("");
  const [status, setEstatus] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, brand, price, id, promotion, status });
    setName("");
    setBrand("");
    setPrice(0);
  };

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      if (fileArray.length > 4) {
        alert('Puedes seleccionar hasta 4 imágenes.');
        return;
      }
      setSelectedImages(fileArray);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Nuevo Producto</h2>
      <div>
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Marca:</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Precio:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Promocion:</label>
        <select
          name=""
          id=""
          className="p-x-2 border w-full py-2 rounded border-gray-300"
          onChange={(e)=>setPromotion(e.target.value)}
        >
          <option value="0">Sin promocion</option>
          <option value="10">10%</option>
        </select>
      </div>
      <div>
        <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors">
          <PhotoIcon className="w-6 h-6 mr-2" />
          <span>Seleccionar Imágenes</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="hidden"
          />
        </label>
        {selectedImages.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Imágenes Seleccionadas:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  className="w-24 h-24 object-contain rounded-lg border-2"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Crear Producto
      </button>
    </form>
  );
};
