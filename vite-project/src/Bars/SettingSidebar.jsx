import React from 'react';
import { NavLink } from 'react-router-dom';

const SettingSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <h2 className="text-2xl font-semibold mb-5">Settings</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" className="block py-2 px-4 hover:bg-gray-200 rounded-md">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/appearance" className="block py-2 px-4 hover:bg-gray-200 rounded-md">
              Appearance
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/accounts" className="block py-2 px-4 hover:bg-gray-200 rounded-md">
              Accounts
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/emails" className="block py-2 px-4 hover:bg-gray-200 rounded-md">
              Emails
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/calendars" className="block py-2 px-4 hover:bg-gray-200 rounded-md">
              Calendars
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SettingSidebar;
