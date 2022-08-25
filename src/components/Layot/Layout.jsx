import { Menu } from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, HeaderContainer, Link } from './Layout.styled';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const { token } = useSelector(state => state.users);

  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <nav>
              <Link to="/">Home</Link>
              {token ? (
                <>
                  <Link to="/contacts">Contacts</Link>
                </>
              ) : (
                <>
                  <Link to="/register">Register</Link>

                  <Link to="/login">Login</Link>
                </>
              )}
            </nav>
            <Menu />
          </HeaderContainer>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
