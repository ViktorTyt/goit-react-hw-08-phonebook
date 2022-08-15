import {
  Form,
  Label,
  Title,
  Input,
  Button,
  Container,
} from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from 'redux/contactsReducer';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedName = name.trim().toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addItem({ id: nanoid(), name: name.trim(), number: number }));
    }

    reset();
  };

  const handleInputNameChange = ({ target: { value } }) => setName(value);
  const handleInputNumberChange = ({ target: { value } }) => setNumber(value);

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form action="" autocomplete="off" onSubmit={handleSubmit}>
        <Label>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputNameChange}
          />
        </Label>
        <Label>
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputNumberChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Container>
  );
};
