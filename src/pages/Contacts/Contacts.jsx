import { ContactList } from 'components/ContactsList';
import { ContactModal } from 'components/Modals/ContactModal';
import { Filter } from 'components/Filter';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/contactsSwaggerApi';

const Contacts = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [addItem, { isLoading }] = useAddContactMutation();

  const handleModalOpen = () => setIsModalShow(true);
  const handleModalClose = () => setIsModalShow(false);

  return (
    <>
      {isModalShow ? (
        <ContactModal
          isModalShow={isModalShow}
          onClose={handleModalClose}
          setApi={addItem}
          isLoading={isLoading}
          textButton="save contact"
        />
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
