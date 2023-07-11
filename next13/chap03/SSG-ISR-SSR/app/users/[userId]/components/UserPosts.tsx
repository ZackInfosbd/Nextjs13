type Props = {
  promise: Promise<Post[]>;
};

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;

  const content = posts.map((post) => {
    const { id, title, body } = post;
    return (
      <article key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
        <br />
      </article>
    );
  });
  return content;
};
export default UserPosts;
