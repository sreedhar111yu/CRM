// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const ProtectedRoute = () => {
  const { isSignedIn } = useAuth();

  console.log('isSignedIn:', isSignedIn); // Debug log

  return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
