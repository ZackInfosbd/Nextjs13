import { useState } from 'react';

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  // const handleToggle = () => {
  //   if (toggle) {
  //     setToggle(false);
  //     return;
  //   }
  //   setToggle(true);
  // };

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {toggle ? 'close' : 'show'}
      </button>

      {toggle ? <Alert /> : ''}
    </div>
  );
};

const Alert = () => {
  return (
    <div className="alert alert-danger">
      <h4>alert </h4>
    </div>
  );
};

export default ToggleChallenge;
