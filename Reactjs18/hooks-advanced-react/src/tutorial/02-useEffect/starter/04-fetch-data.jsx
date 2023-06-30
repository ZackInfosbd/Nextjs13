import React, { useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [people, setPeople] = React.useState([]);

  const fetchPeople = async () => {
    try {
      const result = await fetch(url);

      const fetchedPeople = await result.json();
      console.log(result);
      console.log(fetchedPeople);

      setPeople(fetchedPeople);
    } catch (error) {
      console.log(error);
      throw new Error('There was an error occured while fetching data');
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {people.map((person) => {
          const { id, avatar_url, login, html_url } = person;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} className="img" />
              <div>
                <h5>{login} </h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
