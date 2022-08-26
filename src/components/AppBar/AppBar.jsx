import { Menu } from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { Container, Header, HeaderNav, HeaderContainer } from './AppBar.styled';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { token } = useSelector(state => state.users);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderNav>
            <Navigation token={token} />
            {token ? <Menu /> : <AuthNav />}
          </HeaderNav>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
