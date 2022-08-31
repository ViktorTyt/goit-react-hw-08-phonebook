import { useEffect } from 'react';
import { ContactsForm } from 'components/ContactsForm';
import { Overlay, Modal } from './ModalAddContact.styled';

export const ModalEditContact = ({ onClose }) => {
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
      <Modal isEditModalShow={true}>
        <ContactsForm onClose={onClose} buttonText="save changes" />
      </Modal>
    </Overlay>
  );
};
