import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const { token } = useSelector(state => state.users);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
