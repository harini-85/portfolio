import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaCode, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const certs = [
  {
    title: 'Oracle Java Programming',
    issuer: 'Oracle',
    icon: FaJava,
    color: 'text-orange-400',
    bg: 'from-orange-600/20 to-red-600/20',
    border: 'border-orange-500/30',
    year: '2024',
    link: 'https://still-rain-602.linkyhost.com',
  },
  {
    title: 'Python Essentials I',
    issuer: 'Cisco Networking Academy',
    icon: FaPython,
    color: 'text-blue-400',
    bg: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/30',
    year: '2024',
    link: 'https://www.credly.com/badges/41f375c4-d6c6-4758-a158-0e572a136c3e',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Smart Interviews',
    icon: FaCode,
    color: 'text-purple-400',
    bg: 'from-purple-600/20 to-violet-600/20',
    border: 'border-purple-500/30',
    year: '2024',
    link: 'https://smartinterviews.in/certificate/4cfe4c43',
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certifications" ref={ref} className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Credentials</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-strong rounded-2xl overflow-hidden border ${cert.border} transition-all hover:shadow-xl cursor-default`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${cert.bg} p-6 flex items-center justify-end`}>
                <div className={`w-12 h-12 rounded-full glass flex items-center justify-center ${cert.color}`}>
                  <cert.icon size={22} />
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-white font-bold text-sm leading-snug flex-1 pr-2">{cert.title}</h3>
                  <FaAward className="text-yellow-400 mt-0.5 shrink-0" size={14} />
                </div>
                <p className="text-gray-400 text-xs mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-md">{cert.year}</span>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-xs ${cert.color} hover:opacity-80 transition-opacity font-medium`}
                      aria-label={`View ${cert.title} certificate`}
                    >
                      View <FaExternalLinkAlt size={10} />
                    </a>
                  ) : (
                    <span className="text-xs text-gray-600 font-medium">Coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
