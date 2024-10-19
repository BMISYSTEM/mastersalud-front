import { useState } from "react";

import useMarca from "../useMarcas/useMarca";
import { toast } from "react-toastify";

interface Marca {
  name: string;
}
interface MarcaFormProps {
  onSubmit: (marcas: Marca) => void;
}

export const ModalNewMarca: React.FC<MarcaFormProps> = ({  }) => {
  const {createMarca,mutate} = useMarca()
  const [respuesta,setRespuesta] = useState(null)
  const [name, setName] = useState("");

  const handleClickCreateMarca = async(e:React.FormEvent) =>{
    e.preventDefault();
    const datos = {
      nombre:name
    }
    await  toast.promise(createMarca(datos,setRespuesta),{
      error:'Se genero un error inesperado',
      pending:'Guardando marca',
      success:'Marca guadada con exito'
    }) 
    mutate()
  }
  console.log(respuesta)
  return (
    <form onSubmit={handleClickCreateMarca} className="space-y-4">
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
