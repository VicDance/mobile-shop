import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './app/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>,
)
