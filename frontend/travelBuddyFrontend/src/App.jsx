import React from 'react';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation/Navigation';
import '@fontsource/lato'; // Import domyślnej grubości
import '@fontsource/lato/300.css'; // Light
import '@fontsource/lato/400.css'; // Regular
import '@fontsource/lato/700.css'; // Bold
  
function App() {
  return (
    <>
      <Navigation />
      <MainPage />
    </>
  );
}

export default App;
