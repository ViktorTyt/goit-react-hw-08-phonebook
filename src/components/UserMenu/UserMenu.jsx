import { Wrapper, Title, UserWrapper, Button } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/userAPI';

export const Menu = () => {
  const { name } = useSelector(state => state.users);
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  return (
    <Wrapper>
      <UserWrapper>
        <img
          src={'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'}
          alt="userPhoto"
          width="25"
        />
        <Title>{name}</Title>
      </UserWrapper>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
