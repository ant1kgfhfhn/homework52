import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleLogin = () => {
    dispatch(
      login({
        name: 'Oleksandr',
        email: 'user@example.com',
      })
    );
  };

  if (!isAuthenticated) {
    return (
      <section className="container profile">
        <h1>Profile</h1>

        <p>You are not logged in.</p>

        <button
          type="button"
          className="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </section>
    );
  }

  return (
    <section className="container profile">
      <h1>Profile</h1>

      <div className="profile-card">
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <button
          type="button"
          className="button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default ProfilePage;