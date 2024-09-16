import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { MastersaludContext } from './home/Context/MastersaludContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MastersaludContext>
      <RouterProvider router={router}/>
    </MastersaludContext>
  </StrictMode>,
)
