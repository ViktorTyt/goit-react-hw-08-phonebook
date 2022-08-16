import { Container, List, Message } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem';
import { useSelector } from 'react-redux';
import { useGetContactsList } from 'hooks/useGetContactsList';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  console.log(data);
  console.log(isLoading);
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  console.log(filter);
  const contactsList = useGetContactsList(data, filter);

  return data && !isLoading ? (
    <Container>
      <List>
        {contactsList.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} number={phone} />
        ))}
      </List>
    </Container>
  ) : filter ? (
    <Message> {'No contact found'}</Message>
  ) : (
    <Message>{'Your Phonebook is empty'}</Message>
  );
};
