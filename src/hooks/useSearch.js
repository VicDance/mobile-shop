import { createContext, useState } from 'react';

const SearchContext = createContext();

const useSearch = ({ children }) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const updateQuery = useCallback((value) => {
    setQuery(value);
  }, []);

  const setProductList = useCallback((data) => {
    setProducts(data);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!query) return products;
    const lower = query.toLowerCase();
    return products.filter(
      (p) =>
        p.brand.toLowerCase().includes(lower) ||
        p.model.toLowerCase().includes(lower)
    );
  }, [query, products]);

  const clearQuery = useCallback(() => {
    setQuery('');
  }, []);

  const contextValue = useMemo(
    () => ({
      query,
      updateQuery,
      clearQuery,
      products,
      setProductList,
      filteredProducts,
    }),
    [query, products, filteredProducts, updateQuery, clearQuery, setProductList]
  );

  return (
    <SearchContext.Provider value={{ contextValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default useSearch;
