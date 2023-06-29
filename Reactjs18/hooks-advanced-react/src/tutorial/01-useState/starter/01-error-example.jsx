import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleCountClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>you have clicked {`${count}`} times</h2>
      <button type="button" onClick={handleCountClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
