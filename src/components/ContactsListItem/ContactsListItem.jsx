import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactsListItem.styled';
// import { useDispatch } from 'react-redux';
// import { deleteItem } from 'redux/contactsReducer';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteIten = async id => {
    console.log('id:', id);
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
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
