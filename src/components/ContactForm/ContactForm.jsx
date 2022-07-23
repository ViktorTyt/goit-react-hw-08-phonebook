import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Title,
  Input,
  Button,
  Container,
} from './ContactForm.styled';

import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name.trim(), number.trim());

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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
