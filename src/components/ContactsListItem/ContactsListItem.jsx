import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactItemWrapper,
  ItemName,
  ItemNumber,
  ButtonsWrapper,
  DeleteButton,
  EditButton,
} from './ContactsListItem.styled';
import { ThreeDots } from 'react-loader-spinner';
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from 'redux/contactsApi';
import { useState } from 'react';
import { ContactModal } from 'components/Modals/ContactModal';
import { MdDeleteForever } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';

export const ContactListItem = ({ id, name, number }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [deleteContact, { isLoading: isDeleteLoading }] =
    useDeleteContactMutation();
  const [editContact, { isLoading: isEditLoading }] = useEditContactMutation();

  const handleDeleteItem = async id => {
    await deleteContact(id);
  };

  const handleModalOpen = () => setIsModalShow(true);
  const handleModalClose = () => setIsModalShow(false);

  const handleEditItem = () => {
    handleModalOpen();
  };

  return (
    <>
      <ContactItem>
        <ContactItemWrapper>
          <ItemName>{name}</ItemName>
          <ItemNumber>tel: {number}</ItemNumber>
        </ContactItemWrapper>
        <ButtonsWrapper>
          <DeleteButton
            type="button"
            disabled={isDeleteLoading}
            onClick={() => handleDeleteItem(id)}
          >
            {isDeleteLoading ? (
              <ThreeDots
                height="22"
                width="22"
                radius="9"
                color="black"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <MdDeleteForever size={20} />
            )}
          </DeleteButton>
          <EditButton
            type="button"
            disabled={isEditLoading}
            onClick={handleEditItem}
          >
            {isEditLoading ? (
              <ThreeDots
                height="22"
                width="22"
                radius="9"
                color="black"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <AiTwotoneEdit size={20} />
            )}
          </EditButton>
        </ButtonsWrapper>
      </ContactItem>
      {isModalShow && (
        <ContactModal
          isModalShow={isModalShow}
          onClose={handleModalClose}
          setApi={editContact}
          isLoading={isEditLoading}
          id={id}
          defaultName={name}
          defaultNumber={number}
          textButton="save changes"
        />
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
