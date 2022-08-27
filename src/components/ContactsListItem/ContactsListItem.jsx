import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactItemWrapper,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsListItem.styled';
import { ThreeDots } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contactsSwaggerApi';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteIten = async id => {
    await deleteContact(id);
  };

  return (
    <ContactItem>
      <ContactItemWrapper>
        <ItemName>{name}</ItemName>
        <ItemNumber>tel: {number}</ItemNumber>
      </ContactItemWrapper>
      <DeleteButton
        type="button"
        disabled={isLoading}
        onClick={() => handleDeleteIten(id)}
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
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
