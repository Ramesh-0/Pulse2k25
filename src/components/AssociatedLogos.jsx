import { motion } from 'framer-motion';
import AICTE from '../images/AICTE.png';
import NAAC from '../images/NAAC.png';
import clgLogo from '../images/clglogo.png';
import IIC from '../images/IIC.png';
import NBA from '../images/NBA.png';

const AssociatedLogos = () => {
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

  const logos = [
    { src: AICTE, alt: 'AICTE Logo' },
    { src: NAAC, alt: 'NAAC Logo' },
    { src: clgLogo, alt: 'College Logo' },
    { src: IIC, alt: 'IIC Logo' },
    { src: NBA, alt: 'NBA Logo' }
  ];

  return (
    <div className="bg-[#040d09] pt-24 pb-8">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16 text-white tracking-wider"
        >
          ASSOCIATED WITH
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-center justify-items-center px-4"
        >
          {logos.map((logo, index) => {
            // Custom sizes for each logo
            const getLogoClass = (alt) => {
              switch (alt) {
                case 'AICTE Logo':
                  return "w-[140px] h-[140px] md:w-[160px] md:h-[160px]";
                case 'NAAC Logo':
                  return "w-[120px] h-[120px] md:w-[140px] md:h-[140px]";
                case 'College Logo':
                  return "w-[140px] h-[140px] md:w-[160px] md:h-[160px]";
                case 'IIC Logo':
                  return "w-[140px] h-[80px] md:w-[160px] md:h-[90px]";
                case 'NBA Logo':
                  return "w-[100px] h-[100px] md:w-[120px] md:h-[120px]";
                default:
                  return "w-[120px] h-[120px] md:w-[140px] md:h-[140px]";
              }
            };
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group flex items-center justify-center ${getLogoClass(logo.alt)}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain p-4 relative z-10 filter brightness-100 hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AssociatedLogos; 