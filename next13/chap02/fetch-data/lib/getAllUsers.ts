export const getAllusers = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!resp.ok) throw new Error('failed to fetch data!');

  return resp.json();
};
