import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rameshImage from '../images/team/Ramesh.jpg';
import arfaImage from '../images/team/Arfa.jpg';
import aditiImage from '../images/team/Aditi.jpg';
import snehaImage from '../images/team/Sneha.jpg';
import manshiImage from '../images/team/Manshi.jpg';
import sukanyaImage from '../images/team/Sukanya.jpg';
import abhishekImage from '../images/team/Abhishek.jpg';
import kaushaniImage from '../images/team/Kaushani.jpg';
import mayukhImage from '../images/team/Mayukh.jpg';
import diyaImage from '../images/team/Diya.jpg';
import ritikaImage from '../images/team/Ritika.jpg';

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
      className="flex flex-col items-center justify-center w-full px-1"
    >
      <motion.div 
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-2 border-2 border-emerald-500/30"
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
        className="text-white text-[10px] sm:text-xs md:text-sm font-semibold text-center truncate w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
      >
        {name}
      </motion.h3>
    </motion.div>
  );
};

const AboutUs = () => {
  const [coordinators] = useState([
    { name: "Ramesh Kumar Singh", image: rameshImage },
    { name: "Arfa Ahmed Ansari", image: arfaImage }
  ]);

  const [teamMembers] = useState([
    { name: "Aditi Sharma", image: aditiImage },
    { name: "Sneha Jha", image: snehaImage },
    { name: "Manshi Ram", image: manshiImage },
    { name: "Sukanya Saha", image: sukanyaImage },
    { name: "Ritika Barui", image: ritikaImage },
    { name: "Avinandan Chakroborty", image: "https://ui-avatars.com/api/?name=Avinandan+Chakroborty&background=0D9488&color=fff&size=150" },
    { name: "Ayan Kundu", image: "https://ui-avatars.com/api/?name=Ayan+Kundu&background=0D9488&color=fff&size=150" },
    { name: "Ayush Paul", image: "https://ui-avatars.com/api/?name=Ayush+Paul&background=0D9488&color=fff&size=150" },
    { name: "Abhishek Chaurasiya", image: abhishekImage },
    { name: "Kaushani Chandra", image: kaushaniImage },
    { name: "L.C Abhinash", image: "https://ui-avatars.com/api/?name=L.C+Abhinash&background=0D9488&color=fff&size=150" },
    { name: "Md Tabrez Hossain", image: "https://ui-avatars.com/api/?name=Md+Tabrez+Hossain&background=0D9488&color=fff&size=150" },
    { name: "Mayukh Das", image: mayukhImage },
    { name: "Abhiroop Mukherjee", image: "https://ui-avatars.com/api/?name=Abhiroop+Mukherjee&background=0D9488&color=fff&size=150" },
    { name: "Swarnabha Rakshit", image: "https://ui-avatars.com/api/?name=Swarnabha+Rakshit&background=0D9488&color=fff&size=150" },
    { name: "Diya Sarkar", image: diyaImage }
  ]);

  const [advisors] = useState([
    { name: "Sanchari Pandey", image: "https://ui-avatars.com/api/?name=Sanchari+Pandey&background=0D9488&color=fff&size=150" },
    { name: "Avik Sen", image: "https://ui-avatars.com/api/?name=Avik+Sen&background=0D9488&color=fff&size=150" },
    { name: "SK Mohammad Afzal", image: "https://ui-avatars.com/api/?name=SK+Mohammad+Afzal&background=0D9488&color=fff&size=150" },
    { name: "Advisor 4", image: "https://ui-avatars.com/api/?name=Advisor+4&background=0D9488&color=fff&size=150" },
    { name: "Advisor 5", image: "https://ui-avatars.com/api/?name=Advisor+5&background=0D9488&color=fff&size=150" },
    { name: "Advisor 6", image: "https://ui-avatars.com/api/?name=Advisor+6&background=0D9488&color=fff&size=150" }
  ]);

  const [visibleTeamMembers, setVisibleTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animation for shuffling team members
  useEffect(() => {
    if (teamMembers.length <= 6) return; // Don't animate if we have 6 or fewer members

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % teamMembers.length);
        const endIndex = currentIndex + 6;
        const nextMembers = [];
        
        // Handle wrapping around the array
        for (let i = currentIndex; i < endIndex; i++) {
          const wrappedIndex = i % teamMembers.length;
          nextMembers.push(teamMembers[wrappedIndex]);
        }
        
        setVisibleTeamMembers(nextMembers);
        setIsTransitioning(false);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [teamMembers, currentIndex]);

  // Initialize visible team members
  useEffect(() => {
    const initialMembers = teamMembers.slice(0, 6);
    setVisibleTeamMembers(initialMembers);
  }, [teamMembers]);

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
    <div className="py-12 sm:py-24 px-2 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040d09] to-[#071912] min-h-screen w-full overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>
      
      <motion.div className="max-w-6xl mx-auto relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center"
        >
          <span className="text-white">Our</span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent"> Team</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-white"
        >
          Pulse.exe 2K24
        </motion.h2>
        
        {/* Student Coordinators Section */}
        <motion.section className="mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center text-emerald-400"
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
        <motion.section className="mb-12 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center text-emerald-400"
          >
            TEAM MEMBERS
          </motion.h2>
          
          <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 md:gap-6 mx-auto max-w-[95%] sm:max-w-2xl place-items-center">
            <AnimatePresence mode="wait">
              {visibleTeamMembers.map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isTransitioning ? 0.7 : 1,
                    scale: isTransitioning ? 0.95 : 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                  className="w-full flex items-center justify-center"
                >
                  <TeamMember 
                    name={member.name} 
                    image={member.image} 
                    index={index}
                    delay={0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>
        
        {/* Advisors Section */}
        <motion.section className="mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center text-emerald-400"
          >
            ADVISORS
          </motion.h2>
          
          <div className="grid grid-cols-3 justify-items-center gap-4 sm:gap-8 md:gap-12 mx-auto max-w-2xl">
            {advisors.slice(0, 3).map((advisor, index) => (
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