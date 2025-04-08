import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, image, index, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="flex flex-col items-center justify-center px-1 sm:px-2"
    >
      <motion.div 
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-full overflow-hidden mb-2 sm:mb-4 border-2 border-emerald-500/30"
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(16, 185, 129, 0.7)",
          boxShadow: "0 0 25px rgba(52, 211, 153, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=0D9488&color=fff&size=150`;
          }}
        />
      </motion.div>
      <motion.h3 
        className="text-white text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 text-center truncate w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
      >
        {name}
      </motion.h3>
      <motion.a
        href="#" 
        className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
      >
        WhatsApp &gt;
      </motion.a>
    </motion.div>
  );
};

const AboutUs = () => {
  // Split team members into two rows
  const [teamMembersFirstRow, setTeamMembersFirstRow] = useState([
    { name: "Sreya Dhar", image: "/images/team/sreya.jpg" },
    { name: "Swarnendu Sikdar", image: "/images/team/swarnendu.jpg" },
    { name: "Diptesh Ghosh", image: "/images/team/diptesh.jpg" },
  ]);

  const [teamMembersSecondRow, setTeamMembersSecondRow] = useState([
    { name: "Sinchita Das", image: "/images/team/sinchita.jpg" },
    { name: "Sarthak Mukherjee", image: "/images/team/sarthak.jpg" }
  ]);

  const [coordinators] = useState([
    { name: "Ramesh Kumar Singh", image: "/images/team/ramesh.jpg" },
    { name: "Arfa Ahmed Ansari", image: "/images/team/arfa.jpg" }
  ]);

  const [advisors, setAdvisors] = useState([
    { name: "Arijit Saha", image: "/images/team/arijit.jpg" },
    { name: "Sanjana Shaw", image: "/images/team/sanjana.jpg" },
    { name: "Sourav Ghosh", image: "/images/team/sourav.jpg" }
  ]);

  // Animation for shuffling first row team members
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamMembersFirstRow(prevMembers => {
        // Create a new shuffled array for animation
        const shuffled = [...prevMembers];
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 8000); // Shuffle every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation for shuffling second row team members
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamMembersSecondRow(prevMembers => {
        // Create a new shuffled array for animation
        const shuffled = [...prevMembers];
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 6000); // Shuffle every 6 seconds (different timing for visual interest)

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040d09] to-[#071912] min-h-screen w-full overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={titleVariants}
          className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center"
        >
          <span className="text-white">Our</span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent"> Team</span>
        </motion.h1>
        
        <motion.h2 
          variants={titleVariants}
          className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 text-center text-white"
        >
          Pulse.exe 2K24
        </motion.h2>
        
        {/* Student Coordinators Section */}
        <motion.section className="mb-16 sm:mb-24">
          <motion.h2 
            variants={titleVariants}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-emerald-400"
          >
            STUDENT COORDINATORS
          </motion.h2>
          
          <div className="grid grid-cols-2 justify-items-center items-center gap-4 sm:gap-8 md:gap-12 mb-10 sm:mb-16 mx-auto max-w-lg">
            {coordinators.map((coordinator, index) => (
              <TeamMember 
                key={coordinator.name} 
                name={coordinator.name} 
                image={coordinator.image} 
                index={index}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.section>
        
        {/* Team Members Section */}
        <motion.section className="mb-16 sm:mb-24">
          {/* First Row */}
          <motion.div 
            className="grid grid-cols-3 justify-items-center gap-1 sm:gap-4 mb-8 sm:mb-12 mx-auto max-w-2xl"
            layout
            transition={{
              layout: { duration: 0.6, type: "spring" }
            }}
          >
            {teamMembersFirstRow.map((member, index) => (
              <TeamMember 
                key={member.name} 
                name={member.name} 
                image={member.image} 
                index={index}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
          
          {/* Second Row */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 justify-items-center gap-1 sm:gap-4 mx-auto max-w-md"
            layout
            transition={{
              layout: { duration: 0.6, type: "spring" }
            }}
          >
            {teamMembersSecondRow.map((member, index) => (
              <TeamMember 
                key={member.name} 
                name={member.name} 
                image={member.image} 
                index={index}
                delay={index * 0.1 + 0.3}
              />
            ))}
          </motion.div>
        </motion.section>
        
        {/* Advisors Section */}
        <motion.section className="mb-10 sm:mb-16">
          <motion.h2 
            variants={titleVariants}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-emerald-400"
          >
            ADVISORS
          </motion.h2>
          
          <div className="grid grid-cols-3 justify-items-center gap-1 sm:gap-4 md:gap-12 mx-auto max-w-2xl">
            {advisors.map((advisor, index) => (
              <TeamMember 
                key={advisor.name} 
                name={advisor.name} 
                image={advisor.image} 
                index={index}
                delay={index * 0.1 + 0.5}
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutUs; 