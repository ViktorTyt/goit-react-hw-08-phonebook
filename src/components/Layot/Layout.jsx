import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const { token } = useSelector(state => state.users);

  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to="/">Home</Link>
            {token ? (
              <>
                <Link to="/contacts">Contacts</Link>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <>
                <Link to="/register">Register</Link>

                <Link to="/login">Login</Link>
              </>
            )}
          </nav>
          <UserMenu />
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
