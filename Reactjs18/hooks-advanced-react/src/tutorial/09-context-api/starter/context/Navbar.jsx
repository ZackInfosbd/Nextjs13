import { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

export const Navbarcontext = createContext();

export const UseAppContext = () => useContext(Navbarcontext);

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
    <Navbarcontext.Provider value={{ user, logOut, logIn }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks links={linkItems} />
      </nav>
    </Navbarcontext.Provider>
  );
};
export default Navbar;
