import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
  const { token } = useSelector(state => state.users);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
