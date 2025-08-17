import { RoutesElem } from './routes/RoutesElem'
import './App.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function App() {
  const location = useLocation();
  const [announcement, setAnnouncement] = useState('');
  useEffect(() => {
    const pageTitle = document.title; // Or extract from route data
    setAnnouncement(`Navigated to ${pageTitle}`);
  }, [location]); // Update announcement when location changes

  return (
    <>
      <p aria-live="polite" className="sr-only">{announcement}</p>
      <RoutesElem/>
    </>
  )
}

export default App
