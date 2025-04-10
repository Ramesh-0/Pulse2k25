import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Details = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
        className="max-w-4xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Institute Logo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <img
            src="src/images/clglogo.png"
            alt="MCKVIE Logo"
            className="h-24 w-auto"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x100/071912/22c55e?text=MCKVIE';
              e.target.onerror = null;
            }}
          />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">Event</span>
          <span className="text-white"> Details</span>
        </motion.h1>
        
        {/* About the Event Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-emerald-400">ABOUT THE EVENT</span>
          </h2>
          
          <div className="p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm
                        hover:border-emerald-400/50 transition-all duration-300
                        hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">What is Pulse.exe 2K25?</h3>
            
            <div className="space-y-6 text-center">
              <p className="text-gray-300 text-lg">
                Pulse.exe, is the annual technical event organized by the IT Department of MCKV Institute of Engineering, is set to deliver an exceptional experience for students looking to prove their mettle in the fields of critical thinking, vigilance, and curiosity.
              </p>
              
              <p className="text-gray-300 text-lg">
                Pulse.exe promises to deliver a unique opportunity to showcase your intellect and knowledge, and emerge as a true champion of your field.
              </p>
              
              <p className="text-gray-300 text-lg">
                Students of all departments will compete in teams to prove their knowledge and skills.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Date and Venue Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-emerald-500">DATE AND VENUE</span>
          </h2>
          
          <div className="p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm
                        hover:border-emerald-400/50 transition-all duration-300
                        hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">When & Where</h3>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-20">
              {/* Date and Time */}
              <div className="text-center flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <img src="/images/calendar-icon.svg" alt="Calendar" className="w-full h-full" 
                       onError={(e) => {e.target.src = 'https://img.icons8.com/pastel-glyph/64/22c55e/calendar--v1.png'}} />
                </div>
                <p className="text-xl font-semibold text-white mb-2">Thursday, 25-26 April, 2025</p>
                <p className="text-lg text-emerald-300">Reporting Time: 9:30am</p>
              </div>
              
              {/* Venue */}
              <div className="text-center flex flex-col items-center">
                <div className="w-32 h-32 mb-6">
                  <img 
                    src="https://img.icons8.com/dotty/50/40C057/admission.png" 
                    alt="admission"
                    className="w-full h-full object-contain" 
                  />
                </div>
               
                <p className="text-xl font-semibold text-white mb-2">2nd Floor, IT Department, MCKVIE</p>
                <p className="text-lg text-emerald-300">243, GT Road North, Howrah, West Bengal 711 204</p>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Rules & Regulations Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-emerald-400">RULES & REGULATIONS</span>
          </h2>
          
          <div className="p-6 bg-[#071912] rounded-lg shadow-lg border border-emerald-900/30 backdrop-blur-sm
                        hover:border-emerald-400/50 transition-all duration-300
                        hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">How do I register?</h3>
            
            <div className="space-y-6 text-center">
              <p className="text-gray-300 text-lg">
                Register through the Google Form link provided or click on&nbsp;
                <Link to="/register" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Register here
                </Link>.
              </p>
              
              <p className="text-gray-300 text-lg">
                Two members per team. Inter-department teams are allowed.
              </p>
              
              <p className="text-gray-300 text-lg">
                Rs. 60 entry fee per team to be paid in cash at room no. A202 (2nd Floor) 
                On successful registration and payment you will be issued a receipt.
              </p>
              
              <p className="text-gray-300 text-lg">
                Participants must carry their college ID card along with the receipt on the day of the event.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Registration CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <Link 
            to="/register" 
            className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500
                     px-8 py-3 rounded-lg text-white font-medium text-lg transition-all duration-300
                     hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transform hover:-translate-y-0.5"
          >
            Register Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Details; 