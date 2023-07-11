export async function getUser(userId: string) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!resp.ok) throw Error('failed to fetch the user');

  return resp.json();
}
