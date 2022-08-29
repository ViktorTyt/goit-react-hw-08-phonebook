import { Link } from './Navigation.styled';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <div>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};

export default Navigation;
