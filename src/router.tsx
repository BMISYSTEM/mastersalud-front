import { createBrowserRouter } from "react-router-dom";
import { ViewPrincipalLayout } from "./home/principal/views/ViewPrincipalLayout";



export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ViewPrincipalLayout/>
        }
    ]
)