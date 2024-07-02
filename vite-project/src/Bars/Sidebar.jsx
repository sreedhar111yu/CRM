import React from 'react';
import { FiSearch, FiBell, FiHome, FiSettings, FiUser } from 'react-icons/fi';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold">My CRM</h2>
      </div>
      <div className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          <SidebarItem icon={<FiSearch />} label="Search" to="/search" />
          <SidebarItem icon={<FiBell />} label="Notifications" to="/notifications" />
          <SidebarItem icon={<FiHome />} label="Tasks" to="/tasks" />
        </div>
        <div className="mt-4">
          <h3 className="text-sm uppercase font-semibold">Workspace</h3>
          <div className="space-y-1">
            <SidebarItem icon={<FiUser />} label="People" to="/People" />
            <SidebarItem icon={<FiUser />} label="Companies" to="/companies" />
            <SidebarItem icon={<FiUser />} label="Opportunities" to="/opportunities" />
            <SidebarItem icon={<FiUser />} label="Tickets" to="/tickets" />
            <SidebarItem icon={<FiUser />} label="Products" to="/products" />
            <SidebarItem icon={<FiUser />} label="Quotes" to="/quotes" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-sm uppercase font-semibold">Settings</h3>
          <SidebarItem icon={<FiSettings />} label="Settings" to="/settings" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm uppercase font-semibold">User/Organization Info</h3>
        <SidebarItem icon={<FiUser />} label="Profile" to="/profile" />
      </div>
    </div>
  );
};

export default Sidebar;