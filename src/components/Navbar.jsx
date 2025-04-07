import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          PULSE<span className="text-blue-500">2k25</span>
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
        <div className="hidden md:flex space-x-6">
          <Link to="/events" className="hover:text-blue-400 transition-colors">Events</Link>
          <Link to="/schedule" className="hover:text-blue-400 transition-colors">Schedule</Link>
          <Link to="/tracks" className="hover:text-blue-400 transition-colors">Tracks</Link>
          <Link to="/sponsors" className="hover:text-blue-400 transition-colors">Sponsors</Link>
          <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="hover:text-blue-400 transition-colors">Login</Link>
          <Link to="/register" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors">
            Register
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/events" className="hover:text-blue-400 transition-colors">Events</Link>
            <Link to="/schedule" className="hover:text-blue-400 transition-colors">Schedule</Link>
            <Link to="/tracks" className="hover:text-blue-400 transition-colors">Tracks</Link>
            <Link to="/sponsors" className="hover:text-blue-400 transition-colors">Sponsors</Link>
            <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
            <div className="pt-4 border-t border-gray-700">
              <Link to="/login" className="block mb-4 hover:text-blue-400 transition-colors">Login</Link>
              <Link to="/register" className="block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-center transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 