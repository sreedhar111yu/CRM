import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, label, to }) => (
  <Link to={to} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
    <div className="text-xl">{icon}</div>
    <span>{label}</span>
  </Link>
);

export default SidebarItem;