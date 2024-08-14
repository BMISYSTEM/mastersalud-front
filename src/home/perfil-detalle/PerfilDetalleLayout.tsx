import { Navigate, useNavigate } from 'react-router-dom'
import doc from '../principal/assets/images.jpeg'
import { flushSync } from 'react-dom';
import { Helmet } from 'react-helmet';
export const PerfilDetalleLayout = () => {
    const navigate = useNavigate();
    const detalledoc = () => {
      // Verifica si startViewTransition está disponible
      if ('startViewTransition' in document) {
        document.startViewTransition(() => {
          // Utiliza flushSync para asegurar la sincronización antes de la navegación
          flushSync(() => {
            navigate('/');
          });
        });
      } else {
        // Si no está disponible, solo navega directamente
        navigate('/');
      }
    }
  return (
    <section className='w-full h-screen bg-sky-500 flex flex-row justify-center'>
        <Helmet>
            <title>
                MasterSalud Detalle-Doctor
            </title>
        </Helmet>
        <button onClick={()=>detalledoc()}>
            <img src={doc} alt="" style={{viewTransitionName:'doc'}}  className='w-full h-full'/>
        </button>
    </section>
  )
}
