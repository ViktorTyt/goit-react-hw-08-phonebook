import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container, MainTitle, SectionTitle, Message } from 'App/App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, filterItem } from 'redux/contactsActions';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  console.log(contacts);
  console.log(filter);
  // Прибираємо локал-сторейдж
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // Рефакторинг фільтру на Редакс
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // Рефакторинг на Редакс
  }, [contacts]);

  const handleFormSubmit = (name, number) => {
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      // setContacts(prevState => [
      //   ...prevState,
      //   ...[{ id: nanoid(), name: name.trim(), number: number }],
      // ]);
      dispatch(addItem({ id: nanoid(), name: name.trim(), number: number }));
    }
  };

  // const handleFilterInputChange = filter => setFilter(filter);
  const handleFilterInputChange = filter => dispatch(filterItem(filter));
  const showContact = () => {
    // Рефакторинг на Редакс
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteItem = id => {
    // Рефакторинг на Редакс
    dispatch(deleteItem(id));
    // setFilter('');
    // setContacts(contacts.filter(contact => contact.id !== id));
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
