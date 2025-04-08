import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TeamRoomAllotment = () => {
  const [billNo, setBillNo] = useState('');
  const [roomDetails, setRoomDetails] = useState(null);
  const [eventDetails, setEventDetails] = useState({
    name: 'PULSE 2K25',
    venue: 'Main Auditorium',
    date: 'April 15-17, 2025',
    organizer: 'Technical Committee'
  });
  
  // Generate dummy data for bill numbers 1-100
  const generateDummyData = () => {
    const dummyData = {};
    for (let i = 1; i <= 100; i++) {
      dummyData[i] = {
        billNo: i,
        teamName: `Team ${i}`,
        participantCount: Math.floor(Math.random() * 5) + 2, // 2-6 participants
        room: i <= 40 ? 'A201' : 'A202', // Bill 1-40 in A201, rest in A202
        eventName: ['Hackathon', 'Paper Presentation', 'Coding Challenge', 'Project Expo'][Math.floor(Math.random() * 4)],
        status: ['Confirmed', 'Pending', 'Completed'][Math.floor(Math.random() * 3)]
      };
    }
    return dummyData;
  };

  const [billingData] = useState(generateDummyData());

  const handleSearch = () => {
    if (billNo && billingData[billNo]) {
      setRoomDetails(billingData[billNo]);
    } else {
      setRoomDetails(null);
      alert('Bill number not found!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040d09] to-[#071912] min-h-screen w-full overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">Team Room</span>
          <span className="text-white"> Allotment</span>
        </motion.h1>
        
        {/* Event Information */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm
                   hover:border-emerald-400/50 transition-all duration-300
                   hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
        >
          <h2 className="text-xl font-semibold mb-4 text-white">Event Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-300"><span className="font-medium text-emerald-300">Event:</span> {eventDetails.name}</p>
              <p className="text-gray-300"><span className="font-medium text-emerald-300">Date:</span> {eventDetails.date}</p>
            </div>
            <div>
              <p className="text-gray-300"><span className="font-medium text-emerald-300">Venue:</span> {eventDetails.venue}</p>
              <p className="text-gray-300"><span className="font-medium text-emerald-300">Organizer:</span> {eventDetails.organizer}</p>
            </div>
          </div>
        </motion.div>
        
        {/* Manual Search */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm
                   hover:border-emerald-400/50 transition-all duration-300
                   hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
        >
          <h2 className="text-xl font-semibold mb-4 text-white">Search Room Allotment</h2>
          <div className="flex">
            <div className="flex-grow">
              <label htmlFor="billNo" className="block text-sm font-medium text-emerald-300 mb-1">Enter BillNo:</label>
              <input
                type="text"
                id="billNo"
                value={billNo}
                onChange={(e) => setBillNo(e.target.value)}
                className="w-full px-4 py-2 bg-[#040d09] border border-emerald-900/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter bill number (1-100)"
              />
            </div>
            <div className="ml-4 self-end">
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500
                         text-white font-medium rounded-lg transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transform hover:-translate-y-0.5"
              >
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        {roomDetails && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm
                     hover:border-emerald-400/50 transition-all duration-300
                     hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Room Allocation Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <p className="text-gray-300"><span className="font-medium text-emerald-300">Bill Number:</span> {roomDetails.billNo}</p>
                <p className="text-gray-300"><span className="font-medium text-emerald-300">Team Name:</span> {roomDetails.teamName}</p>
                <p className="text-gray-300"><span className="font-medium text-emerald-300">Participants:</span> {roomDetails.participantCount}</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-medium text-emerald-300">Event:</span> {roomDetails.eventName}</p>
                <p className="text-gray-300"><span className="font-medium text-emerald-300">Status:</span> 
                  <span className={`ml-1 font-medium ${
                    roomDetails.status === 'Confirmed' ? 'text-emerald-400' : 
                    roomDetails.status === 'Pending' ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {roomDetails.status}
                  </span>
                </p>
                <p className="text-gray-300"><span className="font-medium text-emerald-300">Allotted Room:</span> 
                  <span className="ml-1 text-emerald-400 font-bold">{roomDetails.room}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TeamRoomAllotment; 