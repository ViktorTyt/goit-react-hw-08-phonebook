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
import { ModalEditContact } from 'components/Modals/ModalEditContact';

export const ContactListItem = ({ id, name, number }) => {
  const [isEditModalShow, setIsEditModalShow] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // const [editContact] = useEditContactMutation();

  const handleDeleteItem = async id => {
    await deleteContact(id);
  };
  const handleModalOpen = () => setIsEditModalShow(true);
  const handleModalClose = () => setIsEditModalShow(false);
  // const edited = { name: 'Barbos', number: '777-25-65' };
  const handleEditItem = id => {
    // console.log(edited);
    // console.log(id);
    // const tosent = { id, ...edited };
    // console.log(tosent);
    // await editContact(tosent);
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
            disabled={isLoading}
            onClick={() => handleDeleteItem(id)}
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
              'Delete'
            )}
          </DeleteButton>
          <EditButton
            type="button"
            disabled={isLoading}
            onClick={() => handleEditItem(id)}
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
      {isEditModalShow && (
        <ModalEditContact
          isEditModalShow={isEditModalShow}
          onClose={handleModalClose}
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
