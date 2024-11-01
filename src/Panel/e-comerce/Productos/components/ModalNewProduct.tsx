import { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/outline';
import useProductos from "../hooks/useProductos";
import { toast } from "react-toastify";
import useMarca from "../../Marcas/useMarcas/useMarca";
import usePromociones from "../../Promociones/usePromociones/usePromociones";
import { Marcas } from "../../Marcas/MarcasLayout";
import { Promociones } from "../../Promociones/PromocionesLayout";
import useSWR from "swr";
import { clienteAxios } from "../../../../config/axios";
import { Caracteristicas } from "../../caracteristicas/Caracteristicas";


export const ModalNewProduct = () => {
  const {data:allMarca} = useMarca()
  const {data:allPromocion} = usePromociones()
  const {createProducto} = useProductos()
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [caract,setCaract] = useState("");
  const [price, setPrice] = useState(0);
  const [promotion, setPromotion] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [tecnica,setTecnica] = useState('');
  const [uso,setUso] = useState('');
  const [legal,setLegal] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData;
    data.append('nombre',name);
    data.append('id_marca',brand);
    data.append('id_promocion',promotion);
    data.append('precio',price.toString());
    data.append('ficha_tecnica',tecnica);
    data.append('uso_adecuado',uso);
    data.append('caracteristica',caract);
    data.append('aviso_legal',legal);
    if (selectedImages) {
      for (let i = 0; i < selectedImages.length; i++) {
        data.append('fotos[]', selectedImages[i]);
      }
    }

    toast.promise(createProducto(data),{
      error:'se genero un error inesperado, contacte soporte',
      pending:'Guardando producto...',
      success:'Se guardo correctamente el producto'
    })
  };

  const allmarcas:Marcas = allMarca?.data;
  const allpromociones:Promociones = allPromocion?.data;
  
  const {data,isLoading} = useSWR('/api/caracteristicas/all',()=>
    clienteAxios.get('/api/caracteristica/all'))

  const caracteristicas:Caracteristicas = data?.data;

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

  const handleTexto = (text:string) =>{
    const textoFormateado  = text.replace(/\*\*(.*?)\*\*/g, '<span style="font-weight: bold;">$1</span>')
    return textoFormateado
  }
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4  flex flex-col gap-2">
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
        <select name="" id="" className="py-3 px-2 border w-full" onChange={(e)=>setBrand(e.target.value)}>
          <option value="" selected={true}>Seleccione una opcion</option>
          {allmarcas?.succes?.map((marcas,index)=>(
            <option key={index} value={marcas.id}>{marcas.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Caracteristicas:</label>
        <select name="" id="" className="py-3 px-2 border w-full" onChange={(e)=>setCaract(e.target.value)}>
          <option value="" selected={true}>Seleccione una opcion</option>
          {isLoading ? 
            <p>Cargando...</p>
          :
          caracteristicas?.succes?.map((carat,index)=>(
            <option key={index} value={carat.id}>{carat.nombre}</option>
          )) 
          }
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Precio:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <p>{price.toLocaleString('es-CO',{style:'currency',currency:'COP'})}</p>
      </div>
      <div>
        <label className="block text-gray-700">Promocion:</label>
        <select
          name=""
          id=""
          className="p-x-2 border w-full py-2 rounded border-gray-300"
          onChange={(e)=>setPromotion(e.target.value)}
        >
          <option value="" selected={true}>Seleccione una opcion</option>
          {allpromociones?.succes?.map((promocion,index)=>(
            <option key={index} value={promocion.id}>{promocion.nombre}</option>
          ))}
 
        </select>
      </div>
      <label htmlFor="" className=" text-slate-500 text-xl">Ficha tecnica</label>
      <textarea name="" id="" className="border-2 w-full h-32 mt-0 p-2" value={tecnica} onChange={(e)=>setTecnica(e.target.value)}></textarea>
      <label htmlFor="" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: handleTexto(tecnica) }}/>
      
      <label htmlFor="" className=" text-slate-500 text-xl" >Uso adecuado</label>
      <textarea name="" id="" className="border-2 w-full h-32 mt-0 p-2" value={uso} onChange={(e)=>setUso(e.target.value)}></textarea>
      <label htmlFor="" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: handleTexto(uso) }}/>
      <label htmlFor="" className=" text-slate-500 text-xl">Aviso legal</label>
      <textarea name="" id="" className="border-2 w-full h-32 mt-0 p-2" value={legal} onChange={(e)=>setLegal(e.target.value)}></textarea>
      <label htmlFor="" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: handleTexto(legal) }}/>
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
