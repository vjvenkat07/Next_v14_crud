// components/UserCard.js
'use client'
const UserCard = ({ user }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.name}</div>
                <p className="text-gray-700 text-base">
                    {user.email}
                </p>
            {/* <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => window.alert('alert')}>click</button> */}
            </div>
        </div>
    );
};

export default UserCard;
