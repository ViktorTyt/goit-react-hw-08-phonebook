import { ContactsForm } from 'components/ContactsForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter';

const Contacts = () => {
  return (
    <>
      <ContactsForm />
      {/* <SectionTitle>Contacts</SectionTitle> */}
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
