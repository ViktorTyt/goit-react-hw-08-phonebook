import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactsListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteItem, filterItem } from 'redux/contactsActions';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <span>•</span> {name} <br /> tel: {number}
      <DeleteButton
        id={id}
        type="button"
        onClick={() => dispatch(deleteItem(id), filterItem(''))}
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
