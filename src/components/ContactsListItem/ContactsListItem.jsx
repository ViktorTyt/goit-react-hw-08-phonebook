import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactItemWrapper,
  ItemName,
  ItemNumber,
  DeleteButton,
  EditButton,
} from './ContactsListItem.styled';
import { ThreeDots } from 'react-loader-spinner';
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from 'redux/contactsSwaggerApi';
import { useState } from 'react';
import { ContactModal } from 'components/Modals/ContactModal';

export const ContactListItem = ({ id, name, number }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [deleteContact, { isLoading: isDeleteLoading }] =
    useDeleteContactMutation();
  const [editContact, { isLoading }] = useEditContactMutation();

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
        <div>
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
              'Delete'
            )}
          </DeleteButton>
          <EditButton
            type="button"
            disabled={isLoading}
            onClick={handleEditItem}
          >
            {isLoading ? (
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
              'Edit'
            )}
          </EditButton>
        </div>
      </ContactItem>
      {isModalShow && (
        <ContactModal
          isModalShow={isModalShow}
          onClose={handleModalClose}
          setApi={editContact}
          isLoading={isLoading}
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
