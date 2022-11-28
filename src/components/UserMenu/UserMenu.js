import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { UserName, UserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" variant="contained"
        onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </UserWrapper>
  );
};
