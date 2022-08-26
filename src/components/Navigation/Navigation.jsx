import React from 'react';
import { Link } from './Navigation.styled';

const Navigation = ({ token }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      {token && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};

export default Navigation;
