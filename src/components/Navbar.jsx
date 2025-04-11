import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTimeline = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to home page first
      navigate('/', { state: { scrollToTimeline: true } });
    } else {
      // Already on homepage, just scroll
      const timelineSection = document.getElementById('timeline-section');
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#040d09]/80 backdrop-blur-md border-b border-emerald-900/30 text-white fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
              <img 
                src={logo} 
                alt="PULSE.exe Logo" 
                className="h-12 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <a href="#" onClick={scrollToTimeline} className="text-gray-300 hover:text-emerald-300 transition-colors relative group">
              Schedule
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <NavLink to="/room-allotment">Room Allotment</NavLink>
            <NavLink to="/details">Details</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="https://forms.gle/AmxhQUjx3jMp6PUe6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500
                         px-4 py-2 rounded-lg text-white font-medium transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transform hover:-translate-y-0.5"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#071912] border-t border-emerald-900/30 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink to="/" setIsMenuOpen={setIsMenuOpen}>Home</MobileNavLink>
              <a href="#" onClick={scrollToTimeline} className="text-gray-300 hover:text-emerald-300 transition-colors block">
                Schedule
              </a>
              <MobileNavLink to="/room-allotment" setIsMenuOpen={setIsMenuOpen}>Room Allotment</MobileNavLink>
              <MobileNavLink to="/details" setIsMenuOpen={setIsMenuOpen}>Details</MobileNavLink>
              <MobileNavLink to="/about" setIsMenuOpen={setIsMenuOpen}>About Us</MobileNavLink>
              <MobileNavLink to="/faq" setIsMenuOpen={setIsMenuOpen}>FAQ</MobileNavLink>
              <div className="pt-4 border-t border-emerald-900/30">
                <Link 
                  to="https://forms.gle/AmxhQUjx3jMp6PUe6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="block bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-lg 
                           text-center text-white font-medium hover:from-emerald-400 hover:to-emerald-500"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className="text-gray-300 hover:text-emerald-300 transition-colors relative group"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
};

const MobileNavLink = ({ to, children, setIsMenuOpen }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className="text-gray-300 hover:text-emerald-300 transition-colors block"
    >
      {children}
    </Link>
  );
};

export default Navbar; 