import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AppBar } from 'components/AppBar';

import { useCurrentUserQuery } from 'redux/userAPI';
import { useGetContactsQuery } from 'redux/contactsSwaggerApi';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from 'components/PrivateRoutes';
import { Container } from './App.styled';

// import Home from '../pages/Home';
// import Login from 'pages/Login';
// import Register from 'pages/Register';
// import Contacts from 'pages/Contacts';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const { token } = useSelector(state => state.users);
  console.log(token);
  useCurrentUserQuery(null, { skip: !token });
  // console.log(data);
  useGetContactsQuery();

  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );

  //   <>
  //     <Header>
  //       <Container>
  //         <MainTitle>Phonebook</MainTitle>
  //       </Container>
  //     </Header>
  //     <main>
  //       <Section>
  //         <Container>
  //           <ContactsForm />
  //           <SectionTitle>Contacts</SectionTitle>
  //           <Filter />
  //           <ContactList />
  //         </Container>
  //       </Section>
  //     </main>
  //   </>
  // ;
};
