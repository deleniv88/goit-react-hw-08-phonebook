import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, InputItem } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputItem type="email" name="email" variant="outlined" label="email" />
      <InputItem type="password" name="password" variant="outlined" label="password" />
      <Button variant="contained" type="submit">Login</Button>
    </Form>
  );
};
