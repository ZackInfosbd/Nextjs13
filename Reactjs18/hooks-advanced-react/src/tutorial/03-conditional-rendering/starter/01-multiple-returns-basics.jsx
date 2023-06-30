import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    <h1>loading...</h1>;
  }

  useEffect(() => {
    setTimeout(() => {
      // fetch data
      console.log('loading...');
      setIsLoading(false);
    }, 3000);
  }, []);

  if (!isLoading) {
    console.log('data is fetched');
    return <h1>data fetched</h1>;
  }
};
export default MultipleReturnsBasics;
