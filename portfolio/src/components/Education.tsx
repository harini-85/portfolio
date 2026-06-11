import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool, FaStar } from 'react-icons/fa';

const timeline = [
  {
    year: '2023 – 2027',
    degree: 'B.Tech Computer Science & Data Science',
    institution: 'BVRIT (B V Raju Institute of Technology)',
    score: 'CGPA: 9.17',
    icon: FaGraduationCap,
    color: 'from-purple-600 to-blue-600',
    borderColor: 'border-purple-500/40',
    current: true,
  },
  {
    year: '2021 – 2023',
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    score: '98.5%',
    icon: FaSchool,
    color: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/40',
    current: false,
  },
  {
    year: 'Completed 2021',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Akshara The Techno School',
    score: 'GPA: 10.0',
    icon: FaStar,
    color: 'from-violet-600 to-pink-600',
    borderColor: 'border-violet-500/40',
    current: false,
  },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="education" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Academic journey</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-blue-600 to-transparent transform sm:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row gap-6 sm:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 -translate-x-1/2 z-10`}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-4 border-dark`}
                    >
                      <item.icon size={18} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Card — desktop alternating, mobile always right of line */}
                  <div className={`ml-16 sm:ml-0 w-full sm:w-5/12 ${isLeft ? 'sm:mr-auto sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className={`glass-strong rounded-2xl p-5 border ${item.borderColor} transition-all hover:shadow-lg`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-gray-500 font-medium">{item.year}</span>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20 font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-bold text-base mb-1">{item.degree}</h3>
                      <p className="text-gray-400 text-sm mb-3">{item.institution}</p>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 text-white text-sm font-bold`}>
                        <FaStar size={10} />
                        {item.score}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
