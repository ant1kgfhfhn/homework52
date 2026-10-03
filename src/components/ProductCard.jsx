import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
  src={product.thumbnail}
  alt={product.title}
  className="product-card__image"
/>
      </Link>

      <div className="product-card__content">
        <h3 className="product-card__title">
          {product.title}
        </h3>

        <p className="product-card__price">
          ${product.price}
        </p>

        <button
          type="button"
          className="button"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;