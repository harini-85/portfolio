import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const links = [
  { icon: FaGithub, href: 'https://github.com/harini-85', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/harininethi', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:harininethi8@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-dark border-t border-white/5 pt-12 pb-6 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          {/* <div className="text-center sm:text-left">
            <p className="text-xl font-bold gradient-text">NH.dev</p>
            <p className="text-gray-500 text-xs mt-1">Full Stack · ML · Data Science</p>
          </div> */}

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Designed &amp; Developed with{' '}
            <FaHeart className="text-red-500 inline" size={11} />
            {' '}by{' '}
            <span className="text-purple-400 font-medium">Nethi Harini</span>
            {' '}· © {new Date().getFullYear()}
          </p> */}

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <FaArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
