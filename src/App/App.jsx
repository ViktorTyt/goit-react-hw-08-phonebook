import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AppBar } from 'components/AppBar';
import { useCurrentUserQuery } from 'redux/userAPI';
// import { useSelector } from 'react-redux';
import { PrivateRoute, PublicRoute } from 'components/routes';
import { Container, Section } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const { isFetching } = useCurrentUserQuery();

  return (
    !isFetching && (
      <>
        <AppBar />

        <Section>
          <Container>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicRoute>
                      <Home />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted>
                      <Login />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/register"
                  element={
                    <PublicRoute restricted>
                      <Register />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <Contacts />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Suspense>
          </Container>
        </Section>
      </>
    )
  );
};
