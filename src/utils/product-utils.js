const PRODUCTS_URL = 'http://localhost:5000/product';

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${PRODUCTS_URL}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchProductDetail = async (id) => {
  try {
    const res = await fetch(`${PRODUCTS_URL}/${id}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
