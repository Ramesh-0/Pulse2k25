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
                    PULSE
                  </span>
                  <span className="text-white">2k25</span>
                </h3>
              </Link>
              <p className="text-emerald-100/70 leading-relaxed">
                A 24-hour hackathon organized by IEEE JU Student Branch. Join us for an exciting journey of innovation and creativity.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FooterSection title="Quick Links">
                <ul className="space-y-3">
                  <li>
                    <Link to="/events" className="text-emerald-100/70 hover:text-emerald-300 transition-colors">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/schedule" className="text-emerald-100/70 hover:text-emerald-300 transition-colors">
                      Schedule
                    </Link>
                  </li>
                  <li>
                    <Link to="/tracks" className="text-emerald-100/70 hover:text-emerald-300 transition-colors">
                      Tracks
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-emerald-100/70 hover:text-emerald-300 transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </FooterSection>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FooterSection title="Contact">
                <ul className="space-y-3 text-emerald-100/70">
                  <li className="flex items-center gap-2">
                    <span>📍</span> Jadavpur University, Kolkata
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📧</span> contact@pulse2k25.com
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span> +91 98765 43210
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
                      href="https://twitter.com/pulse2k25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#071912] p-2 rounded-lg border border-emerald-900/30 hover:border-emerald-400/50 
                               transition-all duration-300 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]
                               group"
                    >
                      <svg className="w-5 h-5 text-emerald-100/70 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/pulse2k25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#071912] p-2 rounded-lg border border-emerald-900/30 hover:border-emerald-400/50 
                               transition-all duration-300 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]
                               group"
                    >
                      <svg className="w-5 h-5 text-emerald-100/70 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/pulse2k25"
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
              © 2025 PULSE2k25. All rights reserved. Made with ❤️ by IEEE JU Student Branch
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 