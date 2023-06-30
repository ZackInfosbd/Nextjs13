import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState([]);

  const handleClick = () => {
    console.log(people); // set functions don't update state immediately
    setPeople(data);
  };

  const handleRemoveItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h3>{name} </h3>
            <button
              type="button"
              className="btn"
              onClick={() => handleRemoveItem(id)}
              style={{ marginTop: '2rem' }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        Clear All
      </button>
      <button
        type="button"
        className="btn"
        onClick={handleClick}
        style={{ margin: '2rem' }}
      >
        show people
      </button>
    </>
  );
};

export default UseStateArray;
