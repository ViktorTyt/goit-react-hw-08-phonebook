import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container, MainTitle, SectionTitle, Message } from 'App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, filterItem } from 'redux/contactsActions';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleFormSubmit = (name, number) => {
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addItem({ id: nanoid(), name: name.trim(), number: number }));
    }
  };

  const handleFilterInputChange = filter => dispatch(filterItem(filter));
  const showContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteItem = id => {
    dispatch(deleteItem(id));
    dispatch(filterItem(''));
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleFormSubmit} />
      <SectionTitle>Contacts</SectionTitle>
      {contacts.length > 1 && (
        <Filter filter={filter} onFilterChange={handleFilterInputChange} />
      )}
      {contacts.length > 0 ? (
        <ContactList
          contactsState={contacts}
          filter={filter}
          getFiltred={showContact}
          deleteItem={handleDeleteItem}
        />
      ) : (
        <Message>Your Phonebook is empty</Message>
      )}
    </Container>
  );
};
