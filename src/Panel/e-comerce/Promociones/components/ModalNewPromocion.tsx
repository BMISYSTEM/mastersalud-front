import React, { useState } from 'react'
import usePromociones from '../usePromociones/usePromociones';
import { toast } from 'react-toastify';

interface promocion{
    nombre:string;
    porcentaje:number;
    activo:number
}




export const ModalNewPromocion = () => {
  const {createPromo,mutate} = usePromociones()
    const [nombre, setName] = useState("");
    const [porcentaje, setPorcentaje] = useState(0);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const datos ={
      nombre:nombre,
      porcentaje:porcentaje,
      activo:1
    }
    await toast.promise(createPromo(datos),{
      error:'Se genero un error inesperado, consulte con soporte',
      pending:'Guardando promocion',
      success:'La promocion se guardo de manera correcta'
    });
    mutate()
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Nueva Promocion</h2>
      <div>
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Porcentaje:</label>
        <input
          type="number"
          value={porcentaje}
          min={0}
          max={100}
          onChange={(e) => setPorcentaje(Number(e.target.value))}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Crear Promocion
      </button>
    </form>
  )
}
