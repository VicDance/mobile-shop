import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/router';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import CartButton from './products/CartButton';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <CartButton />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
