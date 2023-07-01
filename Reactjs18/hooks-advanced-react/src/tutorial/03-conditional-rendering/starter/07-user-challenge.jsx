import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const logIn = () => {
    setUser({ name: 'zakaria' });
  };

  const logOut = () => {
    setUser(null);
  };

  // return (
  //   <>
  //     {user ? (
  //       <LoggedIn name={user.name} handleLogout={logOut} />
  //     ) : (
  //       <LoggedOut handleLogout={logIn} />
  //     )}
  //   </>
  // );
  return (
    <>
      {user ? (
        <div>
          <h4> hello {user.name} </h4>
          <button className="btn" onClick={logOut}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Hello there, please login</h4>
          <button className="btn" onClick={logIn}>
            login
          </button>
        </div>
      )}
    </>
  );
};

const LoggedIn = (name, handleLogout) => {
  return (
    <div>
      <h4> hello {name} </h4>
      <button className="btn" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};

const LoggedOut = (handleLogin) => {
  return (
    <div>
      <h4>Hello there, please login</h4>
      <button className="btn" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default UserChallenge;
