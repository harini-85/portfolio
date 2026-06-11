import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';
import { VscRepo } from 'react-icons/vsc';

const ghStats = [
  { label: 'Repositories', value: '10+', icon: VscRepo, color: 'text-purple-400' },
  { label: 'Followers', value: '20+', icon: FaUsers, color: 'text-blue-400' },
  { label: 'Stars Earned', value: '15+', icon: FaStar, color: 'text-yellow-400' },
  { label: 'Contributions', value: '200+', icon: FaCodeBranch, color: 'text-green-400' },
];

const topLangs = [
  { lang: 'Python', pct: 40, color: '#3B82F6' },
  { lang: 'JavaScript', pct: 25, color: '#EAB308' },
  { lang: 'Java', pct: 20, color: '#F97316' },
  { lang: 'HTML/CSS', pct: 15, color: '#A855F7' },
];

export default function GitHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const username = 'harini-85';

  return (
    <section id="github" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Open Source</span> */}
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">GitHub</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              @{username}
            </a>
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {ghStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-5 text-center border border-white/5 hover:border-purple-500/30 transition-all"
            >
              <stat.icon className={`${stat.color} mx-auto mb-2`} size={24} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-strong rounded-2xl p-6 border border-white/5 mb-6"
        >
          <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
            <FaCodeBranch className="text-green-400" size={14} />
            Contribution Graph
          </h3>
          <img
            src={`https://ghchart.rshah.org/7C3AED/${username}`}
            alt="GitHub contribution graph"
            className="w-full rounded-lg opacity-90"
            loading="lazy"
          />
        </motion.div>

        {/* GitHub stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-2xl overflow-hidden border border-white/5"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&bg_color=00000000&hide_border=true&title_color=7C3AED&icon_color=3B82F6&text_color=ffffff`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-strong rounded-2xl overflow-hidden border border-white/5"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&bg_color=00000000&hide_border=true&title_color=7C3AED&text_color=ffffff`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-strong rounded-2xl p-6 border border-white/5"
        >
          <h3 className="text-sm font-semibold text-gray-400 mb-5">Language Breakdown</h3>
          <div className="space-y-3">
            {topLangs.map((item) => (
              <div key={item.lang}>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{item.lang}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-all"
          >
            <FaGithub size={16} /> Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
