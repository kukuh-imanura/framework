import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      <h1>PrivateLayout</h1>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
