import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormRegister, InputItem } from './Register.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <InputItem type="text" name="name" variant="outlined" label="name" />
      <InputItem type="email" name="email" variant="outlined" label="email" />
      <InputItem type="password" name="password" variant="outlined" label="password" />
      <Button variant="contained" type="submit">Register</Button>
    </FormRegister>
  );
};
