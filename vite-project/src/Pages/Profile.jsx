import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/clerk-react';

const Profile = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="bg-slate-100 rounded-md p-6 flex justify-between items-center mb-6 shadow-sm">
        <h1 className="flex items-center font-serif uppercase text-3xl text-blue-600 ">
          <UserButton className="mr-2" /> User Profile
        </h1>
        <ThemeProvider defaultTheme="white" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 flex justify-center items-center">
          <div className="space-y-4 w-2/3 border p-4 rounded-md bg-white shadow-md">
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
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Change Password
              </button>
            </div>
            <div className="mt-6">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                Delete Account
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/User_Profile-512.png"
            alt="User Profile"
            className="w-2/3 object-cover rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
