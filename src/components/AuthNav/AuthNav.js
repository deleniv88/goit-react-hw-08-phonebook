import { Container, NavItem} from './AuthNav.styled';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export const AuthNav = () => {
  return (
    <div>
      <Container>
        <NavItem to="/register">Register</NavItem>
          <NavItem to="/login">Login
            <LockOpenIcon/>
          </NavItem>
      </Container>
    </div>
  );
};
