export async function getUserPosts(userId: string) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!resp.ok) throw new Error(`faild to fetch user's posts`);

  return resp.json();
}
