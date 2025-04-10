import { motion } from 'framer-motion';

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-[#040d09] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg blur-3xl -z-10" />
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600"
          animate={{
            textShadow: [
              "0 0 10px rgba(52, 211, 153, 0.3)",
              "0 0 20px rgba(52, 211, 153, 0.5)",
              "0 0 30px rgba(52, 211, 153, 0.7)",
              "0 0 20px rgba(52, 211, 153, 0.5)",
              "0 0 10px rgba(52, 211, 153, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Our sponsors section will be available soon
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 backdrop-blur-sm">
            <span className="text-emerald-400">Stay tuned for updates</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsors; 