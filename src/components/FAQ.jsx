import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 bg-[#071912] rounded-lg border border-emerald-900/30 backdrop-blur-sm
                 hover:border-emerald-400/50 transition-all duration-300
                 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] text-left"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-emerald-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-emerald-100/70">{answer}</p>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is the registration fee for the event?",
      answer: "The registration fee is ₹60 per team or participant."
    },
    {
      question: "Where is the event being held?",
      answer: "The event will be held at MCKV Institute of Engineering (MCKVIE). Specific room/venue details will be shared closer to the event date."
    },
    {
      question: "Can we participate in a team?",
      answer: "Yes! You can participate individually or in a team (maximum team size will be mentioned during registration if there's a limit)."
    },
    {
      question: "What are the different rounds in this event?",
      answer: "Round 1: Elimination Round (Aptitude, Sudoku, Puzzles) - 10:15 AM – 10:45 AM\nRound 2: Idea Submission + Q&A - 12:30 PM – 2:00 PM\nRound 3: Prototype Building (Next Day) - Reporting Time: 9:30 AM, Round Time: 10:00 AM – 1:00 PM"
    },
    {
      question: "What is the format of the first round?",
      answer: "The first round is an elimination round based on logic puzzles, aptitude questions, and Sudoku-style problems. Only selected participants/teams will proceed to the next round."
    },
    {
      question: "What is expected in the second round?",
      answer: "In the Idea Submission round, participants need to submit a short abstract of their idea. Judges will visit your desk, ask questions, and evaluate based on innovation, feasibility, and clarity."
    },
    {
      question: "Is there any specific format for the abstract?",
      answer: "Yes, a brief abstract template will be shared. It should include:\n- Title of the idea\n- Problem statement\n- Proposed solution\n- Tools/technology planned (if any)\n- Team details"
    },
    {
      question: "What should we bring for the prototype round?",
      answer: "Bring your laptop, chargers, and any components (hardware/software) you plan to use. Internet and tables will be provided. Try to bring essentials you may need for building a basic working model or simulation."
    },
    {
      question: "Are we allowed to work on the prototype overnight?",
      answer: "You can brainstorm and plan overnight, but all prototype building and demonstration will happen during the official timing (10:00 AM – 1:00 PM) the next day."
    },
    {
      question: "Will certificates be provided?",
      answer: "Yes, all participants will receive participation certificates, and winners will get special certificates and exciting prizes."
    },
    {
      question: "Who can we contact if we have any questions before or during the event?",
      answer: "You can reach out to the organizing team via the contact details shared in the registration form or event poster."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#040d09] to-[#071912]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            Frequently Asked
          </span>
          {" "}
          <span className="text-white">Questions</span>
        </motion.h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 