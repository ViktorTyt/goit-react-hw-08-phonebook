// import { ContactsForm } from 'components/ContactsForm';
import { ContactList } from 'components/ContactsList';
import { ModalAddContact } from 'components/Modals/ModalAddContact';
import { Filter } from 'components/Filter';
import { useState } from 'react';
import { Button } from './Contacts.styled';

const Contacts = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const handleModalOpen = () => setIsModalShow(true);
  const handleModalClose = () => setIsModalShow(false);
  return (
    <>
      {/* <ContactsForm /> */}
      {isModalShow ? (
        <ModalAddContact isModalShow={isModalShow} onClose={handleModalClose} />
      ) : (
        <>
          <Filter />
          <Button onClick={handleModalOpen}>Add Contact</Button>
          <ContactList />
        </>
      )}
      {/* <SectionTitle>Contacts</SectionTitle> */}
    </>
  );
};

export default Contacts;
