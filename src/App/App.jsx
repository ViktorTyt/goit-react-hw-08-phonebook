import { ContactsForm } from 'components/ContactsForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import {
  Container,
  Section,
  Header,
  MainTitle,
  SectionTitle,
} from 'App/App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <Container>
          <MainTitle>Phonebook</MainTitle>
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <ContactsForm />
            <SectionTitle>Contacts</SectionTitle>
            <Filter />
            <ContactList />
          </Container>
        </Section>
      </main>
    </>
  );
};
