import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamRoomAllotment = () => {
  const [billNo, setBillNo] = useState('');
  const [roomDetails, setRoomDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    name: 'PULSE.exe 2K25',
    venue: 'IT Department',
    date: 'April 25-26, 2025',
    organizer: 'IT Department'
  });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Generate dummy data for bill numbers 18201-18260
  const generateDummyData = () => {
    const dummyData = {};
    const teamNames = {
      18201: 'Dynamic Duo',
      18202: 'Mariners',
      18203: 'Kuch Bhi',
      18204: 'Epsilon',
      18205: 'Bubbles',
      18206: 'A2',
      18207: 'Reccurssion',
      18208: 'Code-Crafters',
      18209: 'Kit-Kat',
      18210: 'Team Blue',
      18211: 'Mid-Bencher',
      18212: 'Albatross',
      18213: 'Bestie Bugs',
      18214: 'Triad',
      18215: 'Study Buddies',
      18216: 'IT-Architects',
      18217: 'Tech Titans',
      18218: 'The Congregation',
      18219: 'Backlogs Bashers',
      18220: 'Mind-Masters',
      18221: 'Grid',
      18222: 'Pulse Duo',
      18223: 'Mech-Tech',
      18224: 'The Thinking Tank',
      18225: 'The Smartinis',
      18226: 'Defender',
      18227: 'Code Catalyst',
      18228: 'Code-Warriors',
      18229: 'Thinkerz',
      18230: 'Glimpse',
      18231: 'BiZero',
      18232: 'Surya',
      18233: 'Neuronauts',
      18234: 'Infinity',
      18235: 'Fusion Force',
      18236: 'The Quantum Core',
      18237: 'Quanta mania',
      18238: 'Elite',
      18239: 'The Puzzlers',
      18240: 'Logical Legends',
      18241: 'Cyber_Natics',
      18242: 'Brainware Builders',
      18243: 'STAR',
      18244: 'Bug Buster',
      18245: 'Dora Dora',
      18246: 'Two Broken Brains',
      18247: 'Binary Busters',
      18248: 'The Boys Group',
      18249: 'BrainEbunch',
      18250: 'Coduo',
      18251: 'Magic Malware',
      18252: 'Caraxes',
      18253: 'Defenders',
      18254: 'Gladiators',
      18255: 'Neural Nexus',
      18256: 'Diptadeep Dey',
      18257: 'Elixer_Dos',
      18258: 'R2R',
      18259: 'Brain Rot'
    };

    for (let i = 18201; i <= 18260; i++) {
      dummyData[i] = {
        billNo: i,
        teamName: teamNames[i] || `Team ${i}`,
        room: i <= 18230 ? 'SIT Hall Basement A-Block' : 'A201 2nd Floor A-Block',
        eventName: 'PULSE.exe 2K25',
        status: 'Confirmed'
      };
    }
    return dummyData;
  };

  const [billingData] = useState(generateDummyData());

  const handleSearch = () => {
    setIsLoading(true);
    const billNumber = parseInt(billNo);
    
    // Add a small delay to show the loading effect
    setTimeout(() => {
      if (billNumber >= 18201 && billNumber <= 18260) {
        if (billingData[billNumber]) {
          setRoomDetails(billingData[billNumber]);
        }
      } else {
        setRoomDetails(null);
        alert('Bill number is invalid. Please complete your payment to get your room allotment.');
      }
      setIsLoading(false);
    }, 500); // 500ms delay for the buffer effect
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
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                className="w-full px-4 py-2 bg-[#040d09] border border-emerald-900/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter bill number (Starting from 18201)"
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
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm"
            >
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
              </div>
            </motion.div>
          ) : roomDetails ? (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TeamRoomAllotment; 