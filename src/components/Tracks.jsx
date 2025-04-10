import { motion } from 'framer-motion';

const AboutEvent = () => {
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
            ABOUT
          </span>
          {" "}
          <span className="text-white">THE EVENT</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#071912] rounded-xl p-8 border border-emerald-900/30 backdrop-blur-sm
                    hover:border-emerald-400/50 transition-all duration-500 relative z-10
                    hover:shadow-[0_0_40px_rgba(52,211,153,0.2)] transform hover:-translate-y-2"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            What is 
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent ml-2">
              Pulse.exe 2K25?
            </span>
          </h3>
          
          <div className="space-y-6 text-emerald-100/80 text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              Pulse.exe is the annual technical event organized by the IT Department of MCKV Institute of Engineering, 
              set to deliver an exceptional experience for students looking to prove their mettle in the fields of 
              critical thinking, vigilance, and curiosity.
            </p>
            
            <p>
              Pulse.exe promises to deliver a unique opportunity to showcase your intellect and knowledge, 
              and emerge as a true champion of your field.
            </p>
            
            <p className="font-medium text-center text-emerald-200">
              Students of all departments will compete in teams to prove their knowledge and skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, alt, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        z: 30, 
        rotateY: 5, 
        scale: 1.05,
        transition: { duration: 0.4 }
      }}
      viewport={{ once: true }}
      className="perspective-1000 group cursor-pointer"
    >
      <div className="relative transform-3d transition-all duration-500 shadow-2xl">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-emerald-300 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition-all duration-500" />
        <div className="relative bg-[#071912] rounded-xl overflow-hidden border border-emerald-700/50 group-hover:border-emerald-400/70 transition-all duration-500">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h4 className="text-white text-lg font-semibold">{alt}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  // Sample gallery images - replace with actual images
  const galleryImages = [
    {
      src: "src/images/Advisors.jpg", 
      alt: "Advisors"
    },
    {
      src: "src/images/Aptitude.jpg", 
      alt: "Aptitude"
    },
    {
      src: "src/images/Coding.jpg", 
      alt: "Coding"
    },
    {
      src: "src/images/Inaugration.jpg", 
      alt: "Inaugration"
    },
    {
      src: "src/images/Organizing.jpg", 
      alt: "Organizing Team"
    },
    {
      src: "src/images/Participants.jpg", 
      alt: "Participants"
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#040d09] to-[#071912] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">EVENT</span>
          {" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            GALLERY
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} {...image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutAndGallery = () => {
  return (
    <>
      <AboutEvent />
      <Gallery />
    </>
  );
};

export default AboutAndGallery; 