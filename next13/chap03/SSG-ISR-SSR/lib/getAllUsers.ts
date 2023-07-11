export const getAllusers = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 },
  });

  if (!resp.ok) throw new Error('failed to fetch data!');

  return resp.json();
};
