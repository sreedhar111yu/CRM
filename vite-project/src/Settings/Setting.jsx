import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SettingSidebar from '@/Bars/SettingSidebar';
import Profile from '@/Pages/Profile';
// Import other setting components as needed

const Settings = () => {
  return (
    <div className="flex">
      <SettingSidebar />
      <div className="flex-1 bg-white">
        <Routes>
          <Route path="profile" element={<Profile />} />
          {/* Add other routes for other settings */}
        </Routes>
      </div>
    </div>
  );
};

export default Settings;
