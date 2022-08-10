import { Container, List, Message } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem';
import { useSelector } from 'react-redux';
import { useGetContactsList } from 'hooks/useGetContactsList';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contactsList = useGetContactsList(contacts, filter);

  return contactsList.length > 0 ? (
    <Container>
      <List>
        {contactsList.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </Container>
  ) : filter ? (
    <Message> {'No contact found'}</Message>
  ) : (
    <Message>{'Your Phonebook is empty'}</Message>
  );
};
