import { useEffect } from 'react';
import { ContactsForm } from 'components/ContactsForm';
import { Overlay, Modal } from './ModalAddContact.styled';

export const ModalAddContact = ({ isModalShow, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackDrop}>
      <Modal isModalShow={true}>
        <ContactsForm onClose={onClose} />
      </Modal>
    </Overlay>
  );
};
