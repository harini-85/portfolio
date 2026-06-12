import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';

const projects = [
  {
    title: 'Smart Medical Appointment Platform',
    description:
      'AI-powered healthcare platform with symptom classification using TF-IDF and Logistic Regression. Features JWT authentication, role-based access, geolocation-based doctor discovery, and automated model retraining.',
    tech: ['FastAPI', 'Next.js', 'Machine Learning', 'JWT', 'MySQL', 'TF-IDF'],
    github: 'https://github.com/harini-85/smart-medical-appointment-platform',
    demo: '',
    gradient: 'from-purple-600/20 to-blue-600/20',
    border: 'border-purple-500/30',
    tag: 'AI / Healthcare',
    tagColor: 'text-purple-400 bg-purple-500/10',
  },
  {
    title: 'Inventory & Business Management System',
    description:
      'Full-stack application for agricultural supply businesses featuring inventory tracking, customer management, credit sales tracking, and automated low-stock alerts.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/harini-85/inventory-management-system.git',
    demo: '',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/30',
    tag: 'Full Stack',
    tagColor: 'text-blue-400 bg-blue-500/10',
  },
  // {
  //   title: 'Event Management System',
  //   description:
  //     'Desktop application for managing events with organizer and participant modules. Built with Java Swing and MySQL via JDBC connectivity for robust event lifecycle management.',
  //   tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
  //   github: 'https://github.com/harini-85',
  //   demo: '',
  //   gradient: 'from-orange-600/20 to-yellow-600/20',
  //   border: 'border-orange-500/30',
  //   tag: 'Java Project',
  //   tagColor: 'text-orange-400 bg-orange-500/10',
  // },

  
  {
    title: 'Facial Emotion Recognition',
    description:
      'Machine Learning project for recognizing human emotions from facial expressions using deep learning techniques and computer vision with OpenCV preprocessing pipeline.',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Deep Learning'],
    github: 'https://github.com/harini-85/facial-emotion-recognition',
    demo: '',
    gradient: 'from-pink-600/20 to-rose-600/20',
    border: 'border-pink-500/30',
    tag: 'DL',
    tagColor: 'text-pink-400 bg-pink-500/10',
  },
  {
    title: 'Multi-Cloud Resource Right-Sizing & Cost Optimization System',
    description:
      'Intelligent multi-cloud VM right-sizing system using XGBoost trained on 150K instances. Supports real-time AWS/Azure/GCP metric collection and CSV-based offline analysis. Classifies VMs as Undersized, Oversized, Optimal, or Zombie with up to 40% cost savings, Gemini-powered explanations, and exportable PDF reports.',
    tech: ['XGBoost', 'Python', 'AWS', 'Azure', 'GCP', 'Machine Learning', 'Gemini AI'],
    github: 'https://github.com/harini-85/cloud-resource-optimizer.git',
    demo: '',
    gradient: 'from-sky-600/20 to-indigo-600/20',
    border: 'border-sky-500/30',
    tag: 'Cloud / ML',
    tagColor: 'text-sky-400 bg-sky-500/10',
  },
  // {
  //   title: 'EV Charging Station Optimization',
  //   description:
  //     'Data-driven project identifying optimal EV charging station locations using geospatial analytics, demand forecasting, and interactive data visualization dashboards.',
  //   tech: ['Python', 'Pandas', 'Data Analysis', 'Matplotlib', 'Visualization'],
  //   github: 'https://github.com/harini-85/EV-Charging-Location-Optimization',
  //   demo: '',
  //   gradient: 'from-green-600/20 to-teal-600/20',
  //   border: 'border-green-500/30',
  //   tag: 'Data Science',
  //   tagColor: 'text-green-400 bg-green-500/10',
  // },
];

function ProjectCard({ project, index, inView }: {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`glass-strong rounded-2xl overflow-hidden border ${project.border} hover:shadow-xl transition-all flex flex-col`}
    >
      {/* Card header / image placeholder */}
      <div className={`bg-gradient-to-br ${project.gradient} h-40 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="glass rounded-2xl p-4 flex items-center justify-center">
          <HiOutlineCode size={36} className="text-white/80" />
        </div>
        <span className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-semibold ${project.tagColor}`}>
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-base mb-2 leading-snug">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-all font-medium"
          >
            <FaGithub size={14} /> GitHub
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-sm text-white font-medium"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">What I've built</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Real-world applications across full stack development, machine learning, and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/harini-85"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            <FaGithub size={16} /> View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
