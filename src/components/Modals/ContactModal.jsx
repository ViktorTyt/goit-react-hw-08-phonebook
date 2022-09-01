import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ContactsForm } from 'components/ContactsForm';
import { Overlay, Modal } from './ContactModal.styled';

export const ContactModal = ({
  onClose,
  setApi,
  id = '',
  defaultName = '',
  defaultNumber = '',
  isLoading,
  textButton,
}) => {
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
        <ContactsForm
          onClose={onClose}
          buttonText={textButton}
          setApi={setApi}
          isLoading={isLoading}
          id={id}
          defaultName={defaultName}
          defaultNumber={defaultNumber}
        />
      </Modal>
    </Overlay>
  );
};

ContactsForm.propTypes = {
  onClose: PropTypes.func,
  textButton: PropTypes.string,
  id: PropTypes.string.isRequired,
  defaultName: PropTypes.string.isRequired,
  defaultNumber: PropTypes.string.isRequired,
  setApi: PropTypes.func,
  isLoading: PropTypes.bool,
};
