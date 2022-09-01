import { useState } from 'react';
import { useLoginMutation } from 'redux/userAPI';
import { Button, Form, Label } from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

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
    <>
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
    </>
  );
};

export default Login;
