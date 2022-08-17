import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactsListItem.styled';
import { ThreeDots } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteIten = async id => {
    await deleteContact(id);
  };

  return (
    <ContactItem>
      <span>•</span> {name} <br /> tel: {number}
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
            color="#ff7700"
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
