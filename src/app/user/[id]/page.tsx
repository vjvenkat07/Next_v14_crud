import UserDetails from '../../../Components/userDetail';

async function fetchUsers(id: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    return res.json();
}

export default async function User({ params }: any) {
    const user = await fetchUsers(params.id);
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center my-8">User List</h1>
            <div className="flex flex-wrap justify-center">
                <UserDetails user={user} />
            </div>
        </div>
    );
}
