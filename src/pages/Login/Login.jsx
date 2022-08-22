import { Form, Label, Button } from './Login.styled';

export const Login = () => {
  return (
    <Form>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
