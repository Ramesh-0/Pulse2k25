import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterSection = ({ title, children }) => (
  <div className="relative">
    <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
      {title}
    </h4>
    {children}
  </div>
);

const Footer = () => {
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
    <footer className="relative bg-[#040d09] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative border-t border-emerald-900/30">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <motion.div variants={itemVariants}>
              <Link to="/" className="inline-block mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                    PULSE.exe
                  </span>
                  <span className="text-white">2k25</span>
                </h3>
              </Link>
              <p className="text-emerald-100/70 leading-relaxed">
              Pulse.exe, is the annual technical event organized by the IT Department of MCKV Institute of Engineering, is set to deliver an exceptional experience for students looking to prove their mettle in the fields of critical thinking, vigilance, and curiosity.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FooterSection title="Quick Links">
                <ul className="space-y-3 text-emerald-100/70">
                  <li>
                    <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link to="/details" className="hover:text-emerald-300 transition-colors">Details</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-emerald-300 transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link to="/sponsors" className="hover:text-emerald-300 transition-colors">Sponsors</Link>
                  </li>
                  <li>
                    <Link to="/faq" className="hover:text-emerald-300 transition-colors">FAQ</Link>
                  </li>
                </ul>
              </FooterSection>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FooterSection title="Contact">
                <ul className="space-y-3 text-emerald-100/70">
                  <li className="flex items-center gap-2">
                    <span>📍</span> MCKV Institute of Engineering, Liluah, Howrah
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📧</span> pulseexe2k25@gmail.com
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span> +91 98753 61048
                  </li>
                </ul>
              </FooterSection>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FooterSection title="Follow Us">
                <div className="space-y-4">
                  <p className="text-emerald-100/70">Stay updated with our latest news and events</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/pulse.exe2k25?igsh=MWt5cWswYWV4cm51dg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#071912] p-2 rounded-lg border border-emerald-900/30 hover:border-emerald-400/50 
                               transition-all duration-300 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]
                               group"
                    >
                      <svg className="w-5 h-5 text-emerald-100/70 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </FooterSection>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center pt-8 border-t border-emerald-900/30"
          >
            <p className="text-emerald-100/70">
              © 2025 PULSE2k25. All rights reserved. Made with ❤️ by the IT Department of MCKV Institute of Engineering
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 