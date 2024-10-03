import ReactModal from "react-modal";
import { Productos, Succe } from "../productosLayout";
import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import useProductos from "../hooks/useProductos";
import { toast } from "react-toastify";
import { Producto } from "../../../../home/Ecomerce/components/Producto";

const ListProductos = ({ succes }: Productos) => {
  const baseUrl = import.meta.env.VITE_URL_API;
  const { updateImagen, updateEstado } = useProductos();
  const [modalImagenes, setModalImagenes] = useState(false);
  const [idimagenes, setIdImagenes] = useState(0);
  const openGallery = (id: number) => {
    setModalImagenes(true);
    setIdImagenes(id);
  };

  const galleryArray = succes?.filter((producto) => producto.id === idimagenes);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
    imagen: number
  ) => {
    if (event?.target?.files) {
      const files = event?.target?.files[0];
      const datos = new FormData();
      datos.append("id_producto", id.toString());
      datos.append("imagen", imagen.toString());
      datos.append("file", files);
      toast.promise(updateImagen(datos), {
        error: "se genero un error al actualizar, comuniquese con soporte",
        pending: "Actualizando la imagen",
        success: "La imagen se actualizo con exito",
      });
    }
  };

  const UpdateProducto = (producto: Succe) => {
    toast.promise(updateEstado(producto), {
      error: "se genero un error al cambiar el estado del producto",
      pending: "cambiando el estado del  producto",
      success: "Producto actualizado",
    });
  };

  return (
    <div>
      <div className="w-full flex flex-row gap-2 items-center justify-between">
        <h2 className="text-2xl font-semibold">Lista de Promociones</h2>
        {/* leyendas */}
        <div className="w-auto flex flex-col items-start border p-2 gap-1">
          <p className="text-lg font-bold">Leyendas</p>
          <div className="flex flex-row gap-2 text-sm">
            <p className="w-4 h-4 bg-slate-300"></p>
            <p>Editable</p>
          </div>
          <div className="flex flex-row gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p>Galeria</p>
          </div>
          <div className="flex flex-row gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
               className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p>Inactivar</p>
          </div>
          <div className="flex flex-row gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p>Activar</p>
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                ID
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Nombre
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                codigo Marc
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Marca
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                codigo Desc
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Descuento
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Porcent
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Valor
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Valor * desc
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Estado
              </th>
              <th className="text-xs px-6 text-left text-gray-600 font-semibold">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {succes?.map((Producto) => (
              <tr
                key={Producto.id}
                className="hover:bg-gray-100 border-b border-gray-200 text-xs"
              >
                <td className="py-3 px-6 text-gray-700 border">
                  {Producto.id}
                </td>
                <td
                  contentEditable={true}
                  onBlur={(e) => {
                    if (e.target.textContent) {
                      UpdateProducto({
                        ...Producto,
                        nombre: e.target.textContent!,
                      });
                    } else {
                      toast.warning("No se actualizo el campo, esta vacio");
                    }
                  }}
                  className="py-3 px-6 text-gray-700 border bg-slate-300"
                >
                  {Producto.nombre}
                </td>
                <td className="py-3 px-6 text-gray-700 border ">
                  {Producto.id_marca}
                </td>
                <td className="py-3 px-6 text-gray-700 border ">
                  {Producto.nombre_marca}
                </td>
                <td className="py-3 px-6 text-gray-700 border ">
                  {Producto.id_promocion}
                </td>
                <td className="py-3 px-6 text-gray-700 border ">
                  {Producto.nombre_promocion}
                </td>
                <td className="py-3 px-6 text-gray-700 border ">
                  {Producto.porcentaje}
                </td>
                <td className="py-3 px-6 text-gray-700 border">
                  {Producto
                    ? Number(Producto.precio).toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                      })
                    : 0}
                </td>
                <td className="py-3 px-6 text-gray-700 border">
                  {Producto.precio && Producto.porcentaje
                    ? (
                        Number(Producto.precio) -
                        (Number(Producto.precio) *
                          Number(Producto.porcentaje)) /
                          100
                      ).toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                      })
                    : 0}
                </td>
                <td className="py-3 px-6 text-gray-700 border">
                  <span
                    className={`px-2 py-1 rounded ${
                      Number(Producto.estado) === 1
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {Number(Producto.estado) === 1 ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="flex flex-row  items-center p-2 gap-2 ">
                  <button
                    onClick={() => openGallery(Producto.id)}
                    className=" flex items-center justify-center w-8 h-8 rounded-full bg-green-200 hover:bg-slate-500  hover:text-white transition-all"
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
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </button>
                  {Producto.estado === "1" ? (
                    <button
                      onClick={() =>
                        UpdateProducto({ ...Producto, estado: "0" })
                      }
                      className=" flex items-center justify-center w-8 h-8 rounded-full bg-red-200 hover:bg-slate-500  hover:text-white transition-all"
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
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => UpdateProducto({ ...Producto, estado: "1" })}
                      className=" flex items-center justify-center w-8 h-8 rounded-full bg-green-200 hover:bg-slate-500  hover:text-white transition-all"
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
                          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </button>
                  )}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactModal
        isOpen={modalImagenes}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <section className="w-[40rem] h-auto bg-white rounded-xl flex flex-col p-1 gap-2">
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-2xl font-semibold">Galeria de imagenes</p>
            <button
              onClick={() => setModalImagenes(false)}
              className="py-2 px-2 bg-red-600 text-white rounded-lg hover:opacity-60 transition-all"
            >
              Cerrar
            </button>
          </div>
          <div className="w-full h-full flex flex-wrap gap-2 p-2">
            <div className="w-40 h-auto flex flex-col gap-2 border">
              <img
                src={`${baseUrl}/storage/${galleryArray?.[0]?.imagen1}`}
                alt=""
                className="w-40 h-40 object-contain "
              />
              <div className="w-full flex flex-row gap-2">
                <div>
                  <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                    <PhotoIcon className="w-6 h-6 mr-2" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleChange(e, idimagenes, 1)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-40 h-auto flex flex-col gap-2 border">
              <img
                src={`${baseUrl}/storage/${galleryArray?.[0]?.imagen2}`}
                alt=""
                className="w-40 h-40 object-contain "
              />
              <div className="w-full flex flex-row gap-2">
                <div>
                  <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                    <PhotoIcon className="w-6 h-6 mr-2" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleChange(e, idimagenes, 2)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-40 h-auto flex flex-col gap-2 border">
              <img
                src={`${baseUrl}/storage/${galleryArray?.[0]?.imagen3}`}
                alt=""
                className="w-40 h-40 object-contain "
              />
              <div className="w-full flex flex-row gap-2">
                <div>
                  <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                    <PhotoIcon className="w-6 h-6 mr-2" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleChange(e, idimagenes, 3)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-40 h-auto flex flex-col gap-2 border">
              <img
                src={`${baseUrl}/storage/${galleryArray?.[0]?.imagen4}`}
                alt=""
                className="w-40 h-40 object-contain "
              />
              <div className="w-full flex flex-row gap-2">
                <div>
                  <label className="flex items-center cursor-pointer bg-blue-500 text-white rounded-lg p-2  justify-center hover:bg-blue-600 transition-colors">
                    <PhotoIcon className="w-6 h-6 mr-2" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleChange(e, idimagenes, 4)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ReactModal>
    </div>
  );
};

export default ListProductos;
