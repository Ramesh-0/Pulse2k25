import { motion } from 'framer-motion';

const ContactPerson = ({ name, phone }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-between p-4 bg-[#071912] rounded-lg border border-emerald-900/30 
               hover:border-emerald-400/50 transition-all duration-300
               hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]"
  >
    <span className="text-white font-medium">{name}</span>
    <a 
      href={`tel:${phone}`}
      className="text-emerald-400 hover:text-emerald-300 transition-colors"
    >
      {phone}
    </a>
  </motion.div>
);

const Contact = () => {
  const facultyContacts = [
    { name: "Prof. Jayanti Mahato", phone: "+91 97325 26103" }
  ];

  const studentContacts = [
    { name: "Ramesh Kumar Singh", phone: "+91 9875361048" },
    { name: "Arfa Ahmed Ansari", phone: "+91 98836 37666" }
  ];

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
            CONTACT
          </span>
          {" "}
          <span className="text-white">US</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-emerald-100/80 text-lg mb-12"
        >
          If you have any further query contact our advisories, feel free to contact us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-12"
        >
          {/* Faculty In-charge Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-emerald-400">
              Faculty In-charge
            </h3>
            <div className="space-y-4">
              {facultyContacts.map((contact, index) => (
                <ContactPerson key={index} {...contact} />
              ))}
            </div>
          </div>

          {/* Student In-charges Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-emerald-400">
              Student In-charges
            </h3>
            <div className="space-y-4">
              {studentContacts.map((contact, index) => (
                <ContactPerson key={index} {...contact} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 