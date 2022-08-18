import { List, Message } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import { useGetContactsList } from 'hooks/useGetContactsList';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.contacts.filter);
  const contactsList = useGetContactsList(data, filter);
  console.log(contactsList);

  if (isLoading) return <Loader />;

  return contactsList.length > 0 ? (
    <List>
      {contactsList.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  ) : filter !== '' && contactsList.length === 0 ? (
    <Message> {'No contact found'}</Message>
  ) : (
    <Message>{'Your Phonebook is empty'}</Message>
  );
};
