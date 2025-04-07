import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              PULSE<span className="text-blue-500">2k25</span>
            </h3>
            <p className="text-gray-400">
              A 24-hour hackathon organized by IEEE JU Student Branch.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/tracks" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tracks
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jadavpur University</li>
              <li>Kolkata, West Bengal</li>
              <li>contact@pulse2k25.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/pulse2k25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/pulse2k25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/pulse2k25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PULSE2k25. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 