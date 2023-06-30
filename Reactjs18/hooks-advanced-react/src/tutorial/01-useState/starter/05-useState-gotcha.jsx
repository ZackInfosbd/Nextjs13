import React from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = React.useState(0);

  const increase = () => {
    setValue(value + 1);
    console.log(value);
  };

  return (
    <>
      <h2>{value} </h2>
      <button type="button" className="btn" onClick={increase}>
        inncrease{' '}
      </button>
    </>
  );
};

export default UseStateGotcha;
