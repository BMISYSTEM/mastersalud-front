import useSWR from 'swr'
import { clienteAxios } from '../../../config/axios'
import {  useState } from 'react'

export interface Succe {
  id:               number;
  nombre:           string;
  id_marca:         number;
  nombre_marca:     string;
  id_promocion:     number;
  porcentaje:       number;
  nombre_promocion: string;
  precio:           number;
  estado:           string;
  imagen1:          string;
  imagen2:          string;
  imagen3:          string;
  imagen4:          string;
  cantidad:         number;
}

export const useEcomerce = () => {
    const [productCarr,setProdutCart] = useState<Succe[]>([])
  
    let TotalPago = [0];

    const {data,error,isLoading,mutate} = useSWR('/api/producto/index',()=>
    clienteAxios.get('/api/producto/index'))


    const {data:marcasIndex,isLoading:loadingMarcas} = useSWR('/api/marcas/index',()=>
    clienteAxios.get('/api/marcas/index'))
    
    const {data:promocionIndex,isLoading:loadingPromocion} = useSWR('/api/promocion/index',()=>
    clienteAxios.get('/api/promocion/index'))

    // carro de compras
    TotalPago= productCarr?.map((product)=>{
        return (product.precio - (product.precio * (product.porcentaje / 100)) ) * product.cantidad
    })
    let valPago = 0;
    if(TotalPago)
    {
        valPago = TotalPago?.reduce((number,val)=>number + val ,0)

    }


    const EliminarProductCart = (id:number) =>{
        const newCart = productCarr.filter((product)=>Number(product.id) !== id);
        localStorage.setItem('cart',JSON.stringify(newCart));
        setProdutCart(JSON.parse(localStorage.getItem('cart') as string))
    }

    const actualizaCart = () =>{
      setProdutCart(JSON.parse(localStorage.getItem('cart') as string))
    }
   
  return {
    data,
    error,
    isLoading,
    mutate,
    loadingMarcas,marcasIndex,
    promocionIndex,loadingPromocion,
    valPago,EliminarProductCart,productCarr,setProdutCart,actualizaCart
  }
}
