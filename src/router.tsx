import { createBrowserRouter } from "react-router-dom";
import { ViewPrincipalLayout } from "./home/principal/views/ViewPrincipalLayout";
import { PerfilDetalleLayout } from "./home/perfil-detalle/PerfilDetalleLayout";
import { LoginLayout } from "./home/Login/LoginLayout";
import { PanelLayout } from "./Panel/PanelLayout";
import { HomeLayout } from './Panel/home/HomeLayout';
import { EcomerceLayout } from "./home/Ecomerce/EcomerceLayout";
import { PanelEcomerceLayout } from "./Panel/e-comerce/PanelEcomerceLayout";
import { ProductosLayout } from "./Panel/e-comerce/Productos/ProductosLayout";
import { MarcasLayout } from "./Panel/e-comerce/Marcas/MarcasLayout";
import { PromocionesLayout } from "./Panel/e-comerce/Promociones/PromocionesLayout";
import { PedidosLayout } from "./Panel/e-comerce/Pedidos/PedidosLayout";
import { ProductDetalle } from "./home/Ecomerce/ProductDetalle";
import Caracteristicas from "./Panel/e-comerce/caracteristicas/Caracteristicas";
import { ConfigLayout } from "./Panel/config/ConfigLayout";
import { EspecialistasLayout } from "./home/Especialistas/EspecialistasLayout";



export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ViewPrincipalLayout/>
        },
        {
            path:'/doc-detalle/:id',
            element:<PerfilDetalleLayout/>
        },
        {
            path:'/e-comerce',
            element:<EcomerceLayout/>
        },
        {
            path:'/e-comerce/:id',
            element:<ProductDetalle/>
        },
        {
            path:'/especialistas/:ciudad/:especialidad/:modalidad',
            element:<EspecialistasLayout/>
        },
        {
            path:'/login',
            element:<LoginLayout/>
        },
        {
            path:'/panel',
            element:<PanelLayout/>,
            children:[
                {
                    path:'/panel/home',
                    element:<HomeLayout/>
                },
                
                {
                    path:'/panel/config',
                    element:<ConfigLayout/>
                },
                {
                    path:'/panel/ecomerce',
                    element:<PanelEcomerceLayout/>,
                    children:[
                        {
                            path:'/panel/ecomerce/productos',
                            element:<ProductosLayout/>
                        },
                        {
                            path:'/panel/ecomerce/marcas',
                            element:<MarcasLayout/>
                        },
                        {
                            path:'/panel/ecomerce/caracteristicas',
                            element:<Caracteristicas/>
                        },
                        {
                            path:'/panel/ecomerce/promociones',
                            element:<PromocionesLayout/>
                        },
                        {
                            path:'/panel/ecomerce/pedidos',
                            element:<PedidosLayout/>
                        },
                    ]
                }
            ]
        },
    ]
)