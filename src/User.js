import React from 'react';

const User = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* Assuming you have an image URL in your API response */}
          <img className="h-48 w-full object-cover md:w-48" src={user.image} alt="User Avatar" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.name}</div>
          <p className="mt-2 text-gray-500">{user.email}</p>
          {/* Add more user details as needed */}
          <p className="mt-2 text-gray-500">User ID: {user.id}</p>
          <p className="mt-2 text-gray-500">Created At: {user.created_at}</p>
          <p className="mt-2 text-gray-500">Updated At: {user.updated_at}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
