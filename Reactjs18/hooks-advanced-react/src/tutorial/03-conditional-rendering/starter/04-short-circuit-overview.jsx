import { useState } from 'react';

const ShortCircuitOverview = () => {
  // Falsy
  const [text, setText] = useState('');

  // Truthy
  const [name, setName] = useState('Susan');

  // return <h2>{if(somethin) {"wont't work" }} </h2>;
  <h1>Falsy OR: {text || 'Hello world'}</h1>;
  <h1>Falsy AND: {text && 'Hello world'}</h1>;
  <h1>Truthy OR: {name || 'Hello world'}</h1>;
  <h1>Truthy AND: {name && 'Hello world'}</h1>;
};
export default ShortCircuitOverview;
