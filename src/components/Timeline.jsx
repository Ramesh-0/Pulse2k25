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

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { 
      scaleY: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`absolute ${isLeft ? 'left-0' : 'right-0'} w-[calc(50%-40px)]`}
      style={{
        top: `${index * 280}px`
      }}
    >
      {/* Content */}
      <div className={`${isLeft ? 'mr-10' : 'ml-10'} bg-[#0a1a14] rounded-xl p-6 
                    border border-emerald-900/30 backdrop-blur-sm 
                    hover:border-emerald-400/50 transition-all duration-300 
                    hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] hover:-translate-y-1
                    group`}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent rounded-xl" />
        <h3 className="text-2xl font-bold text-white mb-2 relative
                     bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text 
                     group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-emerald-400 text-sm mb-4 font-medium relative">{date}</p>
        <p className="text-emerald-100/70 leading-relaxed relative">{description}</p>
      </div>
      
      {/* Vertical line for mobile */}
      <motion.div 
        variants={lineVariants}
        className="absolute left-[5px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-transparent md:hidden"
      />
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
      date: "January 25, 2024",
      description: "Begin your journey by registering for DoubleSlash 3.0. Don't miss out on this opportunity to showcase your skills!"
    },
    {
      title: "First Round",
      date: "February 9, 2024",
      description: "An online preliminary round to test your mettle."
    },
    {
      title: "Hackathon Begins",
      date: "February 15, 2024",
      description: "The coding marathon begins! Get ready for 24 hours of innovation, creativity, and intense development."
    },
    {
      title: "Project Submission",
      date: "February 16, 2024",
      description: "Submit your projects and prepare for the final presentations. May the best team win!"
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

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#040d09] to-[#071912]">
      <div className="container mx-auto px-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-32 relative"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">Event</span>
          {" "}
          <span className="text-white">Timeline</span>
        </motion.h2>

        <div ref={containerRef} className="relative" style={{ height: `${events.length * 280}px` }}>
          {/* Center line container */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1">
            {/* Animated vertical line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute inset-0 w-full bg-gradient-to-b from-emerald-400 to-emerald-500/50 origin-top"
            />

            {/* Static dots */}
            {events.map((_, index) => (
              <div
                key={`dot-${index}`}
                className="absolute w-3 h-3 left-1/2 -translate-x-1/2"
                style={{ top: `${index * 280 + 32}px` }}
              >
                <div className="w-full h-full rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <div className="absolute inset-0 rounded-full bg-emerald-300 animate-pulse opacity-40" />
              </div>
            ))}
          </div>

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