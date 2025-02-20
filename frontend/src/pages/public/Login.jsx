import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <Link to={'/user'} onClick={() => localStorage.setItem('role', 'U')}>
        Login
      </Link>
    </div>
  );
};

export default Login;
