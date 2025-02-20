import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard User</h2>
      <Link to={'/'} onClick={() => localStorage.removeItem('role')}>
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
