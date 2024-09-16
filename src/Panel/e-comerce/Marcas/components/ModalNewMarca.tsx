import { useState } from "react";

interface Marca {
  name: string;
}
interface MarcaFormProps {
  onSubmit: (marcas: Marca) => void;
}

export const ModalNewMarca: React.FC<MarcaFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name  });
    setName("");
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Nuevo Marca</h2>
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
      
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Crear Marca
      </button>
    </form>
  );
};
