import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaJs, FaGithub, FaDatabase,
  FaDownload, FaEnvelope, FaArrowDown
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'Python Developer',
  'Data Science Enthusiast',
  'Problem Solver',
];

const floatingIcons = [
  { Icon: FaPython, color: '#3B82F6', top: '15%', left: '8%', delay: 0 },
  { Icon: FaJava, color: '#F97316', top: '70%', left: '6%', delay: 1 },
  { Icon: FaJs, color: '#EAB308', top: '20%', right: '8%', delay: 0.5 },
  { Icon: FaDatabase, color: '#22C55E', top: '75%', right: '7%', delay: 1.5 },
  { Icon: FaGithub, color: '#A855F7', top: '45%', left: '3%', delay: 2 },
];

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="gradient-text font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-violet-500 blur-[100px]"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, top, left, right, delay }, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top, left, right }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
          className="hidden lg:flex items-center justify-center w-14 h-14 glass rounded-2xl glow"
        >
          <Icon size={28} color={color} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-white">Nethi </span>
          <span className="gradient-text text-shadow">Harini</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-3 font-medium"
        >
          Computer Science Engineering (Data Science) Student
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl mb-6 h-8"
        >
          <TypingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building scalable web applications, solving real-world problems through
          technology, and exploring Machine Learning, Data Science, and Full Stack Development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg transition-all"
          >
            <FiExternalLink size={16} /> View Projects
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3 rounded-xl glass border border-purple-500/40 text-white font-semibold text-sm hover:border-purple-400 transition-all"
          >
            <FaDownload size={14} /> Download Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="flex items-center gap-2 px-7 py-3 rounded-xl glass border border-blue-500/40 text-white font-semibold text-sm hover:border-blue-400 transition-all"
          >
            <FaEnvelope size={14} /> Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown className="text-purple-500" size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
