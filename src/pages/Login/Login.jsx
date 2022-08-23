import { Form, Label, Button } from './Login.styled';
import { useState } from 'react';
import { useLoginMutation } from 'redux/userAPI';

export const Login = () => {
  const [email, setEmail] = useState('557711@gmail.com');
  const [password, setPassword] = useState('qweqwe123');
  const [login] = useLoginMutation();
  // console.log(login);

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    login(credentials);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
