import { useDispatch, useSelector } from 'react-redux';

import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="container empty-cart">
        <h1>Your cart is empty</h1>
        <p>Add some products to your cart.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <h1 className="section-title">Shopping Cart</h1>

      <div className="cart">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
  src={item.thumbnail}
  alt={item.title}
  className="cart-item__image"
/>

            <div className="cart-item__info">
              <h3>{item.title}</h3>

              <p>${item.price}</p>

              <div className="quantity">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="remove-button"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>

        <button
          type="button"
          className="button"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </section>
  );
};

export default CartPage;