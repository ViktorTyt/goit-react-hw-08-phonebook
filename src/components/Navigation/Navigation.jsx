import { Wrapper, Link } from './Navigation.styled';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Wrapper>
  );
};

export default Navigation;
