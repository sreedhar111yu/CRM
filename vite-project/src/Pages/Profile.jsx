import React from 'react';

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Picture</label>
          <input type="file" className="mt-1 block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Change Password</button>
        </div>
        <div className="mt-6">
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
