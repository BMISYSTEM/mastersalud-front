import { createBrowserRouter } from "react-router-dom";
import { ViewPrincipalLayout } from "./home/principal/views/ViewPrincipalLayout";
import { PerfilDetalleLayout } from "./home/perfil-detalle/PerfilDetalleLayout";



export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ViewPrincipalLayout/>
        },
        {
            path:'/doc-detalle',
            element:<PerfilDetalleLayout/>
        },
    ]
)