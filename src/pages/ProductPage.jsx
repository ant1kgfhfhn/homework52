import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import Loader from '../components/Loader';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
  } = useSelector((state) => state.products);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  return (
    <section className="container product-page">
      <div className="product-page__image-wrapper">
       <img
  src={product.thumbnail}
  alt={product.title}
  className="product-page__image"
/>
      </div>

      <div className="product-page__content">
        <p className="product-page__category">
          {product.category}
        </p>

        <h1>{product.title}</h1>

        <p className="product-page__price">
          ${product.price}
        </p>

        <p className="product-page__description">
          {product.description}
        </p>

        <button
          type="button"
          className="button"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductPage;