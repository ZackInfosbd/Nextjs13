import type { Metadata } from 'next';
import { getAllusers } from '@/lib/getAllUsers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Users page',
  description: 'a page that shows fetched users',
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllusers();

  const users = await usersData;

  console.log(users);

  const content = (
    <section>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <br />

      {users.map((user) => {
        const { id, name } = user;
        return (
          <>
            <p key={id}>
              <Link href={`/users/${id}`}>{name} </Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
};
export default UsersPage;

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllusers();
  const users = await usersData;

  return users.map((user) => {
    userId: user.id;
  });
}
