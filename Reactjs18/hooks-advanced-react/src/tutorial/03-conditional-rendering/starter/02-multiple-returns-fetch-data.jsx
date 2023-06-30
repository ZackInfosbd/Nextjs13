import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        // console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) <h1>is loading...</h1>;

  if (isError) <h1>there was an error occured</h1>;

  return (
    <section>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{user.name} </h2>
      <h4>{user.html_url} </h4>
      <h4>works at : {user.company} </h4>
    </section>
  );
};
export default MultipleReturnsFetchData;
