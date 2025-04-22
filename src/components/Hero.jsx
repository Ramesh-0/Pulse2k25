import { useState, useEffect, useRef } from 'react';
import { color, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import AICTE from '../images/AICTE.png';
import NAAC from '../images/NAAC.png';
import clgLogo from '../images/clglogo.png';
import IIC from '../images/IIC.png';
import NBA from '../images/NBA.png';
import Euphoria from '../images/euphoria.png';
import SPO from '../images/spo.png';
import IICMCKVIE from '../images/iicmckvie.png';

const CountdownItem = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#071912] rounded-xl p-4 border border-emerald-900/30 backdrop-blur-sm
               hover:border-emerald-400/50 transition-all duration-300 w-24 sm:w-28 md:w-32
               hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
  >
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-emerald-200 bg-clip-text text-transparent">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-emerald-400 text-xs sm:text-sm font-medium">{label}</div>
  </motion.div>
);

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const splineRef = useRef();
  const sectionRef = useRef();

  function onLoad(splineApp) {
    splineRef.current = splineApp;
  }

  // Track mouse movements across the entire page
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (splineRef.current) {
        // Get mouse coordinates
        const x = event.clientX;
        const y = event.clientY;

        // Emit event to Spline with mouse position
        splineRef.current.emitEvent('mousemove', { x, y });
      }
    };

    // Add event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-04-25T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    { src: NBA, alt: 'NBA Logo' },
    { src: Euphoria, alt: 'Euphoria Logo' },
    { src: SPO, alt: 'SPO Logo' },
    { src: IICMCKVIE, alt: 'IICMCKVIE Logo' }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-16 pb-8 relative bg-gradient-to-b from-[#040d09] to-[#071912] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* 3D Robot Model */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block">
        <Spline
          scene="https://prod.spline.design/OZG4wgFZT11nQKMJ/scene.splinecode"
          className="w-full h-full"
          onLoad={onLoad}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto mt-11 px-4 relative lg:ml-[400px]"
      >
        <motion.div variants={itemVariants} className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
            <span style={{ color: "#f79622" }} className="from-orange-400 to-green-300">
              PULSE
            </span>
            <span>.</span>
            <span style={{ color: "#1aa89e" }}>
              EXE
            </span>
            <span className="text-white"> 2K25</span>
          </h1>
          <p className="text-orange-300 text-base md:text-lg font-medium">
            Code. Create. Innovate.
          </p>
        </motion.div>
        <div className="w-full px-4">
          <motion.div variants={itemVariants} className="text-center mb-2">
            <p className="text-gray-400 text-sm md:text-base max-w-lg lg:max-w-md xl:max-w-sm mx-auto break-words leading-relaxed">
              A technical event organized by the IT Department of MCKVIE in collaboration with IIC MCKVIE
            </p>
          </motion.div>
        </div>
        {/* Logos Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center mb-4 max-w-5xl mx-auto"
        >
          {/* Mobile view - two balanced rows */}
          <div className="md:hidden w-full">
            {/* First row - 4 logos */}
            <div className="flex justify-center gap-4 w-full mb-4">
              {logos.slice(0, 4).map((logo, index) => (
                <motion.div
                  key={index}
                  className="relative group flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`relative z-10 filter brightness-110 hover:brightness-125 transition-all duration-300 ${
                      logo.alt === 'IIC Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'AICTE Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'NAAC Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'College Logo' ? 'w-[60px] h-[60px] object-contain' :
                      logo.alt === 'Euphoria Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'SPO Logo' ? 'w-[65px] h-[65px] object-contain' :
                      logo.alt === 'IICMCKVIE Logo' ? 'w-[65px] h-[65px] object-contain' :
                      'w-[100px] h-[100px] object-contain'
                    }`}
                    style={{
                      filter: logo.alt === 'NBA Logo' ? 'brightness(250%)' : 'brightness(120%)'
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Second row - 4 logos */}
            <div className="flex justify-center gap-4 w-full">
              {logos.slice(4).map((logo, index) => (
                <motion.div
                  key={index + 4}
                  className="relative group flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`relative z-10 filter brightness-110 hover:brightness-125 transition-all duration-300 ${
                      logo.alt === 'IIC Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'AICTE Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'NAAC Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'College Logo' ? 'w-[60px] h-[60px] object-contain' :
                      logo.alt === 'Euphoria Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'SPO Logo' ? 'w-[65px] h-[65px] object-contain' :
                      logo.alt === 'IICMCKVIE Logo' ? 'w-[65px] h-[65px] object-contain' :
                      'w-[100px] h-[100px] object-contain'
                    }`}
                    style={{
                      filter: logo.alt === 'NBA Logo' ? 'brightness(250%)' : 'brightness(120%)'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop view - two rows */}
          <div className="hidden md:flex md:flex-col items-center w-full my-4">
            {/* First row */}
            <div className="flex justify-center items-center gap-8 mb-6">
              {logos.slice(0, 4).map((logo, index) => (
                <motion.div
                  key={index}
                  className="relative group flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`relative z-10 filter brightness-110 hover:brightness-125 transition-all duration-300 ${
                      logo.alt === 'IIC Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'AICTE Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'NAAC Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'College Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'Euphoria Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'SPO Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'IICMCKVIE Logo' ? 'w-[100px] h-[100px] object-contain' :
                      'w-[150px] h-[150px] object-contain'
                    }`}
                    style={{
                      filter: logo.alt === 'NBA Logo' ? 'brightness(400%) contrast(120%)' : 'brightness(120%)'
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Second row */}
            <div className="flex justify-center items-center gap-8">
              {logos.slice(4).map((logo, index) => (
                <motion.div
                  key={index + 4}
                  className="relative group flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`relative z-10 filter brightness-110 hover:brightness-125 transition-all duration-300 ${
                      logo.alt === 'IIC Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'AICTE Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'NAAC Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'College Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'Euphoria Logo' ? 'w-[150px] h-[150px] object-contain' :
                      logo.alt === 'SPO Logo' ? 'w-[100px] h-[100px] object-contain' :
                      logo.alt === 'IICMCKVIE Logo' ? 'w-[100px] h-[100px] object-contain' :
                      'w-[150px] h-[150px] object-contain'
                    }`}
                    style={{
                      filter: logo.alt === 'NBA Logo' ? 'brightness(400%) contrast(120%)' : 'brightness(120%)'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-center text-xl font-bold text-white mb-4">Hacking Begins In</h2>
          <div className="flex flex-row justify-center gap-2">
            <CountdownItem value={timeLeft.days} label="Days" />
            <CountdownItem value={timeLeft.hours} label="Hours" />
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <CountdownItem value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center space-y-2">
          <p className="text-emerald-300 text-sm md:text-base">April 25-26, 2025</p>
          <p className="text-emerald-300 text-sm md:text-base">MCKV Institute of Engineering, Liluah</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              to="https://forms.gle/AmxhQUjx3jMp6PUe6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-400 hover:to-green-500
                       px-6 py-2 rounded-lg text-white font-medium transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(255,165,0,0.3)] transform hover:-translate-y-0.5"
            >
              Register Now
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 