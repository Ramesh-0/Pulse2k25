import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-15T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          PULSE<span className="text-blue-500">2k25</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Code. Create. Innovate.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-sm text-gray-400">Days</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm text-gray-400">Hours</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm text-gray-400">Minutes</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm text-gray-400">Seconds</div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-300">February 15-16, 2025</p>
          <p className="text-lg text-gray-300">Jadavpur University, Kolkata</p>
        </div>

        <div className="mt-12 space-x-4">
          <Link to="/register" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Register Now
          </Link>
          <Link to="/tracks" className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            View Tracks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 