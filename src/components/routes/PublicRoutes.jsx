import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const { isLoggedIn } = useSelector(state => state.users);
  console.log(isLoggedIn);
  const notAccepted = restricted && isLoggedIn;

  return <>{notAccepted ? <Navigate to="/" /> : children}</>;
};
