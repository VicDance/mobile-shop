import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../utils/product-utils';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFiltered(data);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products]);

  return (
    <div className='h-screen mx-auto p-4 bg-gray-100'>
      <div className='flex justify-end mb-6 w-full'>
        <input
          type='text'
          placeholder='Search products...'
          className='p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-100 text-black'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {filtered.slice(0, 8).map((product) => (
          <Link
            key={product.id}
            state={{ product }}
            to={`product/${product.id}`}
          >
            <div
              key={product.id}
              className='border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition bg-white min-w-[200px]'
            >
              <div className='text-gray-500'>
                <p className='font-semibold'>{product.name}</p>
                <p>{product.availability ? 'Available' : 'Not available'}</p>
                <p className='font-bold mt-1'>
                  {product.price ? `${product.price} €` : '—'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
