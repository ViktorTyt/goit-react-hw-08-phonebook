import PropTypes from 'prop-types';
import { List, Button, Message } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import { useGetContactsList } from 'hooks/useGetContactsList';
import { useGetContactsQuery } from 'redux/contactsApi';
import { IoMdAdd } from 'react-icons/io';

export const ContactList = ({ onShowModal }) => {
  const { isLoggedIn } = useSelector(state => state.users);
  const { data, isLoading, error } = useGetContactsQuery(null, {
    skip: !isLoggedIn,
  });

  const filter = useSelector(state => state.filter.filter);
  const contactsList = useGetContactsList(data, filter);

  if (isLoading) return <Loader />;

  return (
    <>
      {error && error.status !== 401 && (
        <h2>
          {error.status} {JSON.stringify(error.data)}
        </h2>
      )}

      {!error && contactsList.length > 0 ? (
        <List>
          {contactsList.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      ) : filter !== '' && contactsList.length === 0 ? (
        <Message> {'No contact found'}</Message>
      ) : (
        !error && <Message> {'Your Phonebook is empty'}</Message>
      )}
      {
        <Button onClick={onShowModal}>
          <IoMdAdd size={48} />
        </Button>
      }
    </>
  );
};

ContactList.propTypes = {
  onShowModal: PropTypes.func.isRequired,
};
