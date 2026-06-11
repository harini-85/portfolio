import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import { SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGooglecolab } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FiZap } from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Programming Languages',
    color: 'from-purple-600 to-violet-600',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Java', icon: FaPython, color: '#3B82F6', level: 80 },
      { name: 'Python', icon: FaJava, color: '#F97316', level: 70 },
    //   { name: 'JavaScript', icon: FaJs, color: '#EAB308', level: 82 },
    ],
  },
  {
    title: 'Web Development',
    color: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#F97316', level: 92 },
      { name: 'CSS', icon: FaCss3Alt, color: '#3B82F6', level: 88 },
      { name: 'Node.js', icon: FaNodeJs, color: '#22C55E', level: 78 },
      { name: 'Express.js', icon: FiZap, color: '#A855F7', level: 75 },
    ],
  },
  {
    title: 'Database',
    color: 'from-green-600 to-teal-600',
    borderColor: 'border-green-500/30',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#00758F', level: 83 },
    ],
  },
  {
    title: 'Data Science & ML',
    color: 'from-violet-600 to-pink-600',
    borderColor: 'border-violet-500/30',
    skills: [
      { name: 'Pandas', icon: SiPandas, color: '#130654', level: 82 },
      { name: 'NumPy', icon: SiNumpy, color: '#4DABCF', level: 80 },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F89939', level: 75 },
      { name: 'TF-IDF / LR', icon: FiZap, color: '#A855F7', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-orange-600 to-red-600',
    borderColor: 'border-orange-500/30',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 88 },
      { name: 'VS Code', icon: VscCode, color: '#007ACC', level: 90 },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626', level: 85 },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00', level: 82 },
    ],
  },
];

function SkillBar({ name, icon: Icon, color, level, inView, delay }: {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon size={16} color={color} />
          <span className="text-sm text-gray-300 font-medium">{name}</span>
        </div>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">What I know</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-strong rounded-2xl p-6 border ${group.borderColor} hover:shadow-lg transition-all`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    inView={inView}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
