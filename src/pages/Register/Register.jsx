import { Form, Label, Button } from './Register.styled';
export const Register = () => {
  return (
    <Form>
      <Label>
        Name
        <input type="name" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
