// import Logout from 'pages/Logout/Logout';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Wrapper, Button } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/userAPI';

export const Menu = () => {
  const { email } = useSelector(state => state.users);
  const [logout] = useLogoutMutation();
  // console.log(logout);
  const handleLogout = () => {
    logout();
  };

  return (
    <Wrapper>
      <span>Welcome, {email}</span>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
