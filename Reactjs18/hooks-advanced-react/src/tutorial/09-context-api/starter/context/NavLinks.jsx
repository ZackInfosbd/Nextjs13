import UserContainer from './UserContainer';

const NavLinks = ({ links }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        {links.map((link) => {
          return (
            <li key={link}>
              <a href="#">{link} </a>
            </li>
          );
        })}
      </ul>

      <UserContainer />
    </div>
  );
};
export default NavLinks;
