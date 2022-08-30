import { ContactList } from 'components/ContactsList';
import { ModalAddContact } from 'components/Modals/ModalAddContact';
import { Filter } from 'components/Filter';
import { useState } from 'react';

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
          <ContactList onShowModal={handleModalOpen} />
        </>
      )}
    </>
  );
};

export default Contacts;
