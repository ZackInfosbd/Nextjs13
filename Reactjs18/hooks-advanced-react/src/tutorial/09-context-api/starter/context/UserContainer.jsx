import { UseAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logOut, logIn } = UseAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>hello there, {user?.name.toUpperCase()} </p>
          <button type="button" className="btn" onClick={logOut}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>hello there, please login</p>
          <button type="button" className="btn" onClick={logIn}>
            login
          </button>
        </>
      )}
    </div>
  );
};
export default UserContainer;
