import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaBrain, FaGraduationCap } from 'react-icons/fa';

const highlights = [
  { icon: FaGraduationCap, color: 'text-purple-400', label: 'CGPA', value: '9.17' },
  { icon: FaCode, color: 'text-blue-400', label: 'Full Stack', value: 'MERN / FastAPI' },
  { icon: FaBrain, color: 'text-violet-400', label: 'ML/DS', value: 'Enthusiast' },
  { icon: FaDatabase, color: 'text-cyan-400', label: 'DSA', value: 'Strong Foundation' },
];

const interests = [
  'Full Stack Development',
  'Machine Learning',
  'Data Science',
  'Software Engineering',
  
  
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Get to know me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl border border-purple-500/30 glow overflow-hidden">
                <img
                  src="/harini.jpg"
                  alt="Nethi Harini"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-purple-500/10 -z-10" />
              <div className="absolute -inset-8 rounded-3xl border border-blue-500/5 -z-10" />
              {/* Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass px-3 py-2 rounded-xl border border-purple-500/30 text-xs font-semibold text-purple-300"
              >
                🎓 BVRIT, 2027
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              B.Tech Computer Science Engineering (Data Science)  Student
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate and results-driven B.Tech student at BVRIT, specializing in
              Computer Science Engineering (Data Science). With a strong academic record of{' '}
              <span className="text-purple-400 font-semibold">9.17 CGPA</span>, I combine
              theoretical knowledge with hands-on project experience.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey spans Full Stack Development, Machine Learning, and Software Engineering.
              I enjoy building solutions that bridge the gap between technology and real-world problems.
            </p>

            {/* Interests */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-medium">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full glass border border-purple-500/20 text-sm text-purple-300 hover:border-purple-400 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
        >
          {highlights.map(({ icon: Icon, color, label, value }, i) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass-strong rounded-2xl p-5 text-center border border-white/5 hover:border-purple-500/30 transition-all"
            >
              <Icon className={`${color} mx-auto mb-2`} size={28} />
              <p className="font-bold text-lg text-white">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
