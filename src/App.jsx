import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamRoomAllotment from './components/TeamRoomAllotment';
import Details from './components/Details';
import AboutUs from './components/AboutUs';

// Component to handle scroll after navigation
const ScrollHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we need to scroll to Timeline
    if (location.state && location.state.scrollToTimeline) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => {
        const timelineSection = document.getElementById('timeline-section');
        if (timelineSection) {
          timelineSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <ScrollHandler />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Tracks />
                <Timeline />
                <Contact />
              </>
            } />
            <Route path="/room-allotment" element={<TeamRoomAllotment />} />
            <Route path="/details" element={<Details />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
