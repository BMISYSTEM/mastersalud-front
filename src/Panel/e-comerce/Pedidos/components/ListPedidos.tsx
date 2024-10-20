import { useState } from 'react';
import { Pedidos } from '../interface/interfacePedidos';
import ReactModal from 'react-modal';
import { usePedidos } from '../hooks/usePedidos';

import spiner from '../assets/spiner.svg'
import { ProductosPedidos } from '../interface/interfaceProductosPedidos';
import { formatMoneda } from '../../../../config/configMoneda';

export const ListPedidos = ({succes}:Pedidos) => {
    const [,setdetalle] = useState('')
    const [modalDetalle,setModalDetalle] = useState(false)



    const {indexProductos} = usePedidos();
    const [productos,setProductos]=  useState<ProductosPedidos>()
    const [loadingprod,setloadingprod] = useState(false)
    const mostrarDetalleFactura = async(factura:string) =>
    {
      const data ={
        'factura':factura
      }
      setModalDetalle(true)
      setloadingprod(true)
      await indexProductos(data,setProductos)
      setdetalle(factura)
      setloadingprod(false)
    }
    const listProductos = productos;
    return (
      <>
        <div>
          <h2 className="text-2xl font-semibold">Lista de Pedidos</h2>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Id</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Factura</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">apellido</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">telefono</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Status venta</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">direccion</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Status Entrega</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Accion</th>
              </tr>
            </thead>
            <tbody>
              {succes?.map(pedidos => (
                <tr key={pedidos.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-700">{pedidos.id}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.factura}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.nombre}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.apellidos}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.telefono_cliente}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.status_pago}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.direccion}</td>
                  <td className="py-3 px-6 text-gray-700">{pedidos.status_entrega}</td>
                  <td className="py-3 px-6 text-gray-700">
                    <button className='p-2 text-xs bg-sky-700 text-white font-bold rounded-xl
                    hover:bg-sky-500 transition-all' onClick={()=>mostrarDetalleFactura(pedidos.factura)}>
                      Detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        <ReactModal
          isOpen={modalDetalle}
          onRequestClose={() => setModalDetalle(false)}
          className="fixed inset-0 flex items-center justify-center "
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <section className="w-auto h-full bg-white p-2 flex flex-col gap-2">
              <div className="w-full flex flex-row justify-between p-2">
                  <p className="text-lg font-bold text-slate-400">ListaProductosFactura</p>
                  <button onClick={()=>setModalDetalle(false)} className="p-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 transition-all ">
                      Cerrar
                  </button>
              </div>
              {loadingprod ? 
                <div className='w-full h-full flex flex-row justify-center items-center'>
                  <img src={spiner} alt="" className='w-1/2 h-1/2 object-contain' />
                </div>
            
              : 
              
                <table>
                    <thead className="bg-gray-200 border-b border-gray-300">
                        <tr>
                            {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_producto</th> */}
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">Producto</th>
                            {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_promocion</th> */}
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">promocion</th>
                            {/* <th className="text-xs px-6 text-left text-gray-600 font-semibold">id_marca</th> */}
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">marca</th>
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">cantidad</th>
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">valor unitario</th>
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">descuento</th>
                            <th className="text-xs px-6 text-left text-gray-600 font-semibold">ValorTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                      {listProductos?.succes.map((prod,index)=>(
                        <tr key={index}>
                            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.id_producto}</td> */}
                            <td className="py-3 px-6 text-gray-700 border ">{prod.nombre_produto}</td>
                            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.id_promocion}</td> */}
                            <td className="py-3 px-6 text-gray-700 border ">{prod.nombre_promocion}</td>
                            {/* <td className="py-3 px-6 text-gray-700 border ">{prod.id_marca}</td> */}
                            <td className="py-3 px-6 text-gray-700 border ">{prod.nombre_marca}</td>
                            <td className="py-3 px-6 text-gray-700 border ">{prod.cantidad}</td>
                            <td className="py-3 px-6 text-gray-700 border ">{formatMoneda(prod.valor_unitario)}</td>
                            <td className="py-3 px-6 text-gray-700 border ">{prod.procentaje_aplicado} %</td>
                            <td className="py-3 px-6 text-gray-700 border ">
                              {formatMoneda((prod.valor_unitario - (prod.valor_unitario * (prod.procentaje_aplicado / 100))) * prod.cantidad)}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
              
              }

          </section>
        </ReactModal>
      </>
      );
}
