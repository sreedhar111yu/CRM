import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './Auth/SignIn';
import Sidebar from './Bars/Sidebar';
import People from './Pages/People';
import Setting from './Settings/Setting';
import Companies from './Companies/Companies';
import Profile from './Pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

function App() {
  
  return (
    <>
    
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            {/* <h1 className="text-2xl font-bold">Welcome to My CRM</h1> */}
            <Routes>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/people" element={<People />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              {/* <Route path="/" element={<Navigate to="/Co" />} /> */}
              <Route path="/" element={<Navigate to="/profile" />} />
            </Routes>
          </div>
        </div>
      </Router>
    
    </>
    
  );
}

export default App;
