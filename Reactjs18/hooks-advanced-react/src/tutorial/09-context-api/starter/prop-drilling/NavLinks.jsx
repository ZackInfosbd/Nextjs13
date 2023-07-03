import UserContainer from './UserContainer';

const NavLinks = ({ user, logout, login, links }) => {
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
      <UserContainer user={user} logout={logout} login={login} />
    </div>
  );
};
export default NavLinks;
