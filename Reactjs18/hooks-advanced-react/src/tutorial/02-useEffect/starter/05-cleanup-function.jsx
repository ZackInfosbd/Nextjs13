import React, { useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = React.useState(false);

  console.log('render');

  return (
    <>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log('hi, im scrolling');
    };

    window.addEventListener('scroll', someFunc);

    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
