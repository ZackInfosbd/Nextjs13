import { useState } from 'react';
import NavLinks from './NavLinks';

const linkItems = ['Home', 'About'];

const Navbar = () => {
  const [user, setUser] = useState({ name: 'zakaria' });

  const logOut = () => {
    setUser(null);
  };
  const logIn = () => {
    setUser({ name: 'zakaria' });
  };

  return (
    <nav className="navbar">
      <h5>Context API</h5>
      <NavLinks user={user} login={logIn} logout={logOut} links={linkItems} />
    </nav>
  );
};
export default Navbar;
