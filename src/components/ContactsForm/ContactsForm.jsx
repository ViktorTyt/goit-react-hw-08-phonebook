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
import { useGetContactsQuery } from 'redux/contactsApi';

export const ContactsForm = ({
  onClose,
  buttonText,
  id,
  defaultName,
  defaultNumber,
  setApi,
  isLoading,
}) => {
  const [name, setName] = useState(defaultName);
  const [number, setNumber] = useState(defaultNumber);
  const { data } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    const normalizedName = name.trim().toLowerCase();
    const formData = { name, number };

    if (data.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      try {
        const requestData = { id, ...formData };
        await setApi(requestData);
      } catch (error) {
        console.log(error);
      }

      onClose();
    }

    reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            buttonText
          )}
        </Button>
      </Form>
    </Container>
  );
};
