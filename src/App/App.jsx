import { ContactsForm } from 'components/ContactsForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Container, MainTitle, SectionTitle } from 'App/App.styled';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactsForm />
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
