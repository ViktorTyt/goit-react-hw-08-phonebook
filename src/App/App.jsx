import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container, MainTitle, SectionTitle, Message } from 'App/App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = (name, number) => {
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [
        ...prevState,
        ...[{ id: nanoid(), name: name.trim(), number: number }],
      ]);
    }
  };

  const handleFilterInputChange = filter => setFilter(filter);

  const showContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteItem = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
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
