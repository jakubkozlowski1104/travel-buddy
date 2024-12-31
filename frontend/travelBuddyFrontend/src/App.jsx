import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import '@fontsource/lato'; // Import domyślnej grubości
import '@fontsource/lato/300.css'; // Light
import '@fontsource/lato/400.css'; // Regular
import '@fontsource/lato/700.css'; // Bold
import MainPage from './pages/MainPage/MainPage';
import LogIn from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import UserProfile from './pages/UserProfile/UserProfile';
import Settings from './components/Settings/Settings';
import CreateTrip from './components/CreateTrip/CreateTrip';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-trip" element={<CreateTrip />} />
      </Routes>
    </Router>
  );
}

export default App;
