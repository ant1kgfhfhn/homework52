import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="container">
      <div className="hero">
        <h1>Welcome to ShopStore</h1>
        <p>Find products you love.</p>
      </div>

      <h2 className="section-title">Products</h2>

      {loading && <Loader />}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;