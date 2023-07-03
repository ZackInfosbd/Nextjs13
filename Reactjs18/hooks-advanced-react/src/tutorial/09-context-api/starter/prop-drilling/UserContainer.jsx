import PropTypes from 'prop-types';

const UserContainer = ({ user, logout, login }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>hello there, {user?.name.toUpperCase()} </p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>hello there, please login</p>
          <button type="button" className="btn" onClick={login}>
            login
          </button>
        </>
      )}
    </div>
  );
};
UserContainer.propTypes = {};
export default UserContainer;
