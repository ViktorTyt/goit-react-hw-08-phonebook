import { List, Button, Message } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import { useGetContactsList } from 'hooks/useGetContactsList';
import { useGetContactsQuery } from 'redux/contactsSwaggerApi';

export const ContactList = ({ onShowModal }) => {
  const { isLoggedIn } = useSelector(state => state.users);
  const { data, isLoading } = useGetContactsQuery(null, {
    skip: !isLoggedIn,
  });

  const filter = useSelector(state => state.filter.filter);
  const contactsList = useGetContactsList(data, filter);

  if (isLoading) return <Loader />;

  return contactsList.length > 0 ? (
    <>
      <Button onClick={onShowModal}>Add Contact</Button>
      <List>
        {contactsList.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  ) : filter !== '' && contactsList.length === 0 ? (
    <Message> {'No contact found'}</Message>
  ) : (
    <Message>{'Your Phonebook is empty'}</Message>
  );
};
