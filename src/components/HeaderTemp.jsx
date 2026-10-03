import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="logo">
          ShopStore
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>

          <Link to="/profile" className="nav__link">
            <FaUser />
            Profile
          </Link>

          <Link to="/cart" className="nav__link cart-link">
            <FaShoppingCart />
            Cart

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;