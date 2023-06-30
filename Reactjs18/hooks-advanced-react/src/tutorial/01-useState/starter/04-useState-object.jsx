import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('muhammed');
  const [age, setAge] = useState(20);
  const [hobby, setHobby] = useState('read books');

  const handleShow = () => {
    setName('zakaria');
    setAge(36);
    setHobby('yell at the pc');
  };

  return (
    <>
      <h3>{name} </h3>
      <h3>{age} </h3>
      <h3>{hobby} </h3>
      <button type="button" onClick={handleShow} className="btn">
        show zakaria
      </button>
    </>
  );
};

export default UseStateObject;
