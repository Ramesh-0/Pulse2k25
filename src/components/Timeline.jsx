import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const TimelineEvent = ({ title, date, description, index, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const variants = {
    hidden: { 
      opacity: 0,
      x: isLeft ? -20 : 20,
      y: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`absolute w-[46%] md:w-[calc(50%-40px)] ${
        isLeft 
          ? 'left-0' 
          : 'right-0'
      }`}
      style={{
        top: `${index * 280}px`
      }}
    >
      {/* Content */}
      <div className={`${
        isLeft 
          ? 'mr-1 md:mr-10' 
          : 'ml-1 md:ml-10'
        } bg-[#0a1a14] rounded-xl p-4 md:p-6 
        border border-emerald-900/30 backdrop-blur-sm 
        hover:border-emerald-400/50 transition-all duration-300 
        hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] hover:-translate-y-1
        group`}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent rounded-xl" />
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative
                     bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text 
                     group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-emerald-400 text-xs md:text-sm mb-2 md:mb-4 font-medium relative">{date}</p>
        <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed relative">{description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
    mass: 0.1
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const events = [
    {
      title: "Registration Opens",
      date: "April 12, 2025",
      description: "Begin your journey by registering for PULSE.exe. Don't miss out on this opportunity to showcase your skills!"
    },
    {
      title: "Crack Track",
      date: "April 25, 2025, from 9:30 AM",
      description: "An Elimination Round to test your mettle. That contains Aptitude, Sudoku, Coding and much more exsiting Queestions."
    },
    {
      title: "Neuro Hack",
      date: "April 25, 2025",
      description: "Showcase your innovative thinking and creativity to the world."
    },
    {
      title: "Finale",
      date: "April 26, 2025",
      description: "Build your prototype and hack the event. May the best team win!"
    }
  ];

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section 
      id="timeline-section"
      className="py-20 relative bg-gradient-to-b from-[#040d09] to-[#071912]"
    >
      <div className="container mx-auto px-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-20 md:mb-32 relative"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">Event</span>
          {" "}
          <span className="text-white">Timeline</span>
        </motion.h2>

        <div ref={containerRef} className="relative" style={{ height: `${events.length * 280}px` }}>
          {/* Center line */}
          <div className="absolute left-0 right-0 mx-auto w-[2px] top-0 bottom-0">
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute inset-0 w-full bg-gradient-to-b from-emerald-400 to-emerald-500/50 origin-top"
            />
          </div>

          {/* Separate dots component */}
          {events.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              initial="hidden"
              animate="visible"
              variants={dotVariants}
              className="absolute w-3 h-3 left-0 right-0 mx-auto z-10"
              style={{ top: `${index * 280 + 32}px` }}
            >
              <div className="w-full h-full rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <div className="absolute inset-0 rounded-full bg-emerald-300 animate-pulse opacity-40" />
            </motion.div>
          ))}

          {/* Timeline events */}
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              index={index}
              isLeft={index % 2 === 0}
              {...event}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 