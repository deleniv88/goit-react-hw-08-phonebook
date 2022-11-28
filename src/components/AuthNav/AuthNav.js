import { Container, NavItem } from './AuthNav.styled';

export const AuthNav = () => {

  const navItems = [
    { href: '/register', text: 'Register' },
    { href: '/login', text: 'Login' }
  ]

  return (
    <div>
      <Container>
        {navItems.map(({ href, text }) =>
          <NavItem to={href} key={href}>{text}</NavItem>)}
      </Container>
    </div>
  );
};
