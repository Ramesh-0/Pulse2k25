import { motion } from 'framer-motion';

const TrackCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-emerald-500/5 to-transparent rounded-xl 
                      transform transition-transform duration-500 group-hover:scale-105" />
      <div className="bg-[#071912] rounded-xl p-6 border border-emerald-900/30 backdrop-blur-sm
                    hover:border-emerald-400/50 transition-all duration-300 relative z-10
                    hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] group-hover:-translate-y-1">
        <div className="text-4xl mb-4 bg-gradient-to-br from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-emerald-200 bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-emerald-100/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Tracks = () => {
  const tracks = [
    {
      title: "Web3",
      description: "Dive into the decentralized future by building applications that leverage blockchain technology and smart contracts.",
      icon: "🌐"
    },
    {
      title: "Education",
      description: "Transform the learning experience by creating tools to bridge educational gaps and enhance accessibility.",
      icon: "📚"
    },
    {
      title: "Green Tech",
      description: "Pave the way for sustainable living by developing eco-friendly and energy-efficient solutions.",
      icon: "🌱"
    },
    {
      title: "Health",
      description: "Revolutionize healthcare with innovative technologies aimed at improving diagnosis, treatment, and well-being.",
      icon: "🏥"
    },
    {
      title: "Women Safety",
      description: "Contribute to a safer world by creating applications and systems that prioritize security and empowerment.",
      icon: "🛡️"
    },
    {
      title: "Cyber Security",
      description: "Tackle modern security challenges with robust solutions to protect data and privacy.",
      icon: "🔒"
    },
    {
      title: "Open Innovation",
      description: "Unleash your creativity and build anything that inspires you outside the predefined tracks.",
      icon: "💡"
    }
  ];

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

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#071912] to-[#040d09] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            Event
          </span>
          {" "}
          <span className="text-white">Tracks</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-emerald-100/70 text-lg text-center max-w-3xl mx-auto mb-16"
        >
          Choose your path to innovation and make an impact in these exciting domains
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tracks.map((track, index) => (
            <TrackCard key={index} {...track} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks; 