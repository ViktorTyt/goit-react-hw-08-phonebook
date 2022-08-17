import { ContactsForm } from 'components/ContactsForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Container, Header, MainTitle, SectionTitle } from 'App/App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <Container>
          <MainTitle>Phonebook</MainTitle>
        </Container>
      </Header>
      <main>
        <Container>
          <ContactsForm />
          <SectionTitle>Contacts</SectionTitle>
          <Filter />
          <ContactList />
        </Container>
      </main>
    </>
  );
};
