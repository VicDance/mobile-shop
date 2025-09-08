import useCart from '@/hooks/useCart';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='p-4 flex justify-between items-center border-b'>
        <h2 className='text-lg font-bold'>Carrito</h2>
        <button onClick={onClose} className='text-gray-500 hover:text-black'>
          ✕
        </button>
      </div>

      <div className='p-4 flex-1 overflow-y-auto'>
        {cartItems.length === 0 ? (
          <p className='text-gray-500'>Tu carrito está vacío</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center mb-4'
            >
              <div>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-sm text-gray-500'>
                  {item.price} € x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className='text-red-500 hover:text-red-700 text-sm'
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>

      <div className='p-4 border-t'>
        <p className='font-bold'>Total: {total} €</p>
        <button className='mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
