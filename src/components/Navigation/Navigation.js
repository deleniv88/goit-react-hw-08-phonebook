import { Container } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'components/hooks';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Container>
        <NavItem to="/">Home</NavItem>
        {isLoggedIn && (
          <NavItem to="/contacts">Contacts</NavItem>
        )}
      </Container>
    </nav>
  );
};
