import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h2>Landing</h2>
      <Link to={'/login'}>Login</Link>
    </div>
  );
};

export default Landing;
