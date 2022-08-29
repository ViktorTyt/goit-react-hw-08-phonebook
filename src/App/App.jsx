import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AppBar } from 'components/AppBar';
import { useCurrentUserQuery } from 'redux/userAPI';
import { useSelector } from 'react-redux';
import { PrivateRoutes, PublicRoutes } from 'components/routes';
import { Container, Section } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  console.log(isLoggedIn);
  useCurrentUserQuery();

  return (
    <>
      <AppBar />

      <Section>
        <Container>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <PublicRoutes restricted={true}>
                    <Login />
                  </PublicRoutes>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoutes restricted={true}>
                    <Register />
                  </PublicRoutes>
                }
              />
              <Route path="/" element={<PrivateRoutes />}>
                <Route path="/contacts" element={<Contacts />} />
              </Route>
            </Routes>
          </Suspense>
        </Container>
      </Section>
    </>
  );
};
