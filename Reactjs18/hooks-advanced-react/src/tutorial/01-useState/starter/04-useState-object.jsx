import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState('muhammed');
  // const [age, setAge] = useState(20);
  // const [hobby, setHobby] = useState('read books');

  const [person, setPerson] = useState({
    name: 'muhammed',
    age: 20,
    hobby: 'read books',
  });

  const handleShow = () => {
    // setPerson({ name: 'zakaria', age: 36, hobby: 'yell at the PC' });
    setPerson({ ...person, name: 'zakaria' });
  };

  return (
    <>
      <h3>{person.name} </h3>
      <h3>{person.age} </h3>
      <h3>{person.hobby} </h3>
      <button type="button" onClick={handleShow} className="btn">
        show zakaria
      </button>
    </>
  );
};

export default UseStateObject;
