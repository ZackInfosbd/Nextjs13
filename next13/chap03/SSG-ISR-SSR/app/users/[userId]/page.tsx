import { Suspense } from 'react';
import { getUser } from '@/lib/getUser';
import { getUserPosts } from '@/lib/getUserPosts';
import UserPosts from './components/UserPosts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user.name) {
    return {
      title: 'User not found',
    };
  }

  return { title: user.name, description: `this is the page of ${user.name}` };
}

const UserDetailsPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;
  // const userPosts = await userPostsData;

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  // // console.log(user);
  // console.log(userPosts);

  if (!user.name) return notFound();

  const { id, name } = user;

  return (
    <>
      <h2> {name} </h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* normally it wrks without the disable types check line "@ts.expect-error Server Component"  */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};
export default UserDetailsPage;
