import { Menu } from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { Header, HeaderNav, HeaderContainer } from './AppBar.styled';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.users);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderNav>
            <Navigation />
            {isLoggedIn ? <Menu /> : <AuthNav />}
          </HeaderNav>
        </HeaderContainer>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
