import { useAuth } from 'hooks/useAuth';
import { NavStyled } from './Navigation.styled';
import { NavLinkStyled } from 'components/Layout/Layout.styled';
import { FcBookmark } from 'react-icons/fc';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          Contacts
          <FcBookmark />
        </NavLinkStyled>
      )}
    </NavStyled>
  );
};
