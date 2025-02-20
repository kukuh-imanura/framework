import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem('role'); // Ambil role dari Local Storage

  // Jika role pengguna ada di daftar allowedRoles, izinkan akses
  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to='/unauthorized' replace />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.any,
};

export default ProtectedRoute;
