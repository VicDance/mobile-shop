import useCart from '@/hooks/useCart';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
    });
  };

  return (
    <div className='flex flex-col items-center min-h-screen p-4'>
      <div className='bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full'>
        <div className='text-gray-500'>
          <p className='font-semibold'>{product.name}</p>
          <p>{product.availability ? 'Available' : 'Not available'}</p>
          <p className='font-bold mt-1'>
            {product.price ? `${product.price} €` : '—'}
          </p>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className='max-w-md w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition'
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductDetail;
