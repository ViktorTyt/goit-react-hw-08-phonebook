import {
  Form,
  Label,
  Title,
  Input,
  Button,
  Container,
} from './ContactsForm.styled';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSwaggerApi';

export const ContactsForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addItem, { isLoading }] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const normalizedName = name.trim().toLowerCase();

    if (data.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      await addItem({ name: name.trim(), number: number });
      onClose();
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
        <Button type="submit">
          {isLoading ? (
            <ThreeDots
              height="56"
              width="56"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            'Save contact'
          )}
        </Button>
      </Form>
    </Container>
  );
};
