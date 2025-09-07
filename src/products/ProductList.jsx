import { useEffect, useState } from 'react';
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
        products.filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products]);

  return (
    <div class='h-screen mx-auto p-4 bg-gray-100'>
      <div class='flex justify-end mb-6 w-full'>
        <input
          type='text'
          placeholder='Search products...'
          class='p-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-100 text-black'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div class='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {filtered.slice(0, 8).map((product) => (
          <div
            key={product.id}
            class='border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition bg-white min-w-[200px]'
          >
            <div class='text-gray-500'>
              <p class='font-semibold'>{product.name}</p>
              <p>{product.availability ? 'Available' : 'Not available'}</p>
              <p class='font-bold mt-1'>
                {product.price ? `${product.price} €` : '—'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
