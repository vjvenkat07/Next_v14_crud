import Link from 'next/link';
import UserCard from '../../Components/userCard';
import dbConnect from '../../lib/mongodb'

async function fetchUsers() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function User() {
  const users = await fetchUsers();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">User List</h1>
      <div className="flex flex-wrap justify-center">
        {users.map((user: any) => (
          <Link key={user.id} href={`/user/${user.id}`}>
            <UserCard key={user.id} user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
}
