import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, navigateTo = '/login' }) => {
  const { isLoggedIn } = useSelector(state => state.users);

  return <>{isLoggedIn ? children : <Navigate to={navigateTo} />}</>;
};
