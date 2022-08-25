// import Logout from 'pages/Logout/Logout';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Wrapper, Link } from './UserMenu.styled';

export const Menu = () => {
  return (
    <Wrapper>
      <p>Viktor</p>
      <Link to="/logout">Logout</Link>
    </Wrapper>
  );
};
