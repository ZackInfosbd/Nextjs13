import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);

  console.log(people);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeID = Date.now();
    const newUser = { id: fakeID, name };
    setPeople((prevValue) => {
      return [...prevValue, newUser];
    });
  };

  const handleUserRemove = (id) => {
    const newUsers = people.filter((person) => person.id != id);
    setPeople(newUsers);
  };

  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {/* render users below */}
      <h3>users</h3>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.name} </h4>
              <button
                type="button"
                className="btn"
                onClick={() => handleUserRemove(person.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
