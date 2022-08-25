import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layot';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import Logout from 'pages/Logout/Logout';
import { useCurrentUserQuery } from 'redux/userAPI';
import { useSelector } from 'react-redux';
import PrivateRoutes from 'components/PrivateRoutes';

export const App = () => {
  const { token } = useSelector(state => state.users);
  const { data } = useCurrentUserQuery(null, { skip: !token });
  console.log(data);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
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
