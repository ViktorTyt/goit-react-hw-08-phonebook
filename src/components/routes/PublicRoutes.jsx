import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  children,
  restricted = false,
  navigateTo = '/',
}) => {
  const { isLoggedIn } = useSelector(state => state.users);

  const notAccepted = restricted && isLoggedIn;

  return <>{notAccepted ? <Navigate to={navigateTo} /> : children}</>;
};
