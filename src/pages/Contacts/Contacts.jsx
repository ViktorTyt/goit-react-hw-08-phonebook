import { ContactsForm } from 'components/ContactsForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter';

export const Contacts = () => {
  return (
    <>
      <ContactsForm />
      {/* <SectionTitle>Contacts</SectionTitle> */}
      <Filter />
      <ContactList />
    </>
  );
};
