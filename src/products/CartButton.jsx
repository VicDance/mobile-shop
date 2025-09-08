import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import useCart from '@/hooks/useCart';
import CartSidebar from './CartSidebar';

const CartButton = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='absolute top-4 right-4'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative p-2 rounded-full bg-gray-100 hover:bg-gray-200'
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2'>
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <CartSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CartButton;
