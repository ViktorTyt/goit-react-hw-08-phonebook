import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layot';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
// import Logout from 'pages/Logout/Logout';
// import UserMenu from 'components/UserMenu';
import { useCurrentUserQuery } from 'redux/userAPI';
import { useSelector } from 'react-redux';
import { PrivateRoutes } from 'components/PrivateRoutes';
import { Menu } from 'components/UserMenu';
// import { Suspense } from 'react';
import { Container } from './App.styled';

export const App = () => {
  const { token } = useSelector(state => state.users);
  const { data } = useCurrentUserQuery(null, { skip: !token });
  console.log(data);

  return (
    <>
      <Layout />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/usermenu" element={<Menu />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
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
