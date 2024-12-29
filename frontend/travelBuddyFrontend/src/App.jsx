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

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
