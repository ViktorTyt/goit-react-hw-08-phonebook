import { List, Message } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import { useGetContactsList } from 'hooks/useGetContactsList';
import { useGetContactsQuery } from 'redux/contactsSwaggerApi';
// import { useCurrentUserQuery } from 'redux/userAPI';

export const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  // const { token } = useSelector(state => state.users);
  // const { data: currentUserData } = useCurrentUserQuery(null, { skip: !token });

  const filter = useSelector(state => state.contacts.filter);
  const contactsList = useGetContactsList(data, filter);

  if (isLoading) return <Loader />;

  return contactsList.length > 0 ? (
    <List>
      {contactsList.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  ) : filter !== '' && contactsList.length === 0 ? (
    <Message> {'No contact found'}</Message>
  ) : (
    <Message>{'Your Phonebook is empty'}</Message>
  );
};
