export async function getUserPosts(userId: string) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!resp.ok) undefined;

  return resp.json();
}
