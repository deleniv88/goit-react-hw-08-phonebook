import { Container, NavItem} from './AuthNav.styled';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export const AuthNav = () => {

  // const navItems = [
  //   { href: '/register', text: 'Register' },
  //   { href: '/login', text: 'Login' }
  // ]

  return (
    <div>
      <Container>
        <NavItem to="/register">Register</NavItem>
          <NavItem to="/login">Login
            <LockOpenIcon/>
          </NavItem>
        {/* {navItems.map(({ href, text }) =>
          <NavItem to={href} key={href}>{text}</NavItem>)} */}
      </Container>
    </div>
  );
};
