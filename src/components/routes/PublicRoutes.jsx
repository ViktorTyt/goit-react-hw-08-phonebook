import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children, restricted }) => {
  const { isLoggedIn } = useSelector(state => state.users);
  const notAccepted = restricted && isLoggedIn;

  return <>{notAccepted ? <Navigate to="/" /> : children}</>;
};
