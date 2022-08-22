import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layot';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
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
