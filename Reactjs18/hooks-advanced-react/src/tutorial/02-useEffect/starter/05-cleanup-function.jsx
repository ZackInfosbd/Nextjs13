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
    // console.log('hmm, this is interesting');
    const inter = setInterval(() => {
      // console.log('hello from interval');
    }, 1000);
    return () => {
      clearInterval(inter);
      console.log('clean up');
    };
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
