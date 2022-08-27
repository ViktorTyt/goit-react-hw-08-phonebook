import { Form, Label, Button } from './Register.styled';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRegistrerMutation } from 'redux/userAPI';
import { useSelector } from 'react-redux';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegistrerMutation();
  const { token } = useSelector(state => state.users);

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const credentials = { name, email, password };
    register(credentials);
  };

  return (
    <>
      {token && <Navigate to="/" replace />}

      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </Label>
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
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
