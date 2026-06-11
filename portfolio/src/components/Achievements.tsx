import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaCode, FaBrain, FaLayerGroup, FaGraduationCap } from 'react-icons/fa';

const achievements = [
  {
    icon: FaGraduationCap,
    value: 9.17,
    label: 'CGPA',
    suffix: '',
    description: 'Academic Excellence',
    color: 'from-purple-600 to-violet-600',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: FaLayerGroup,
    value: 5,
    label: 'Full Stack Projects',
    suffix: '+',
    description: 'End-to-End Applications',
    color: 'from-blue-600 to-cyan-600',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: FaBrain,
    value: 3,
    label: 'ML/DS Projects',
    suffix: '+',
    description: 'Machine Learning Solutions',
    color: 'from-violet-600 to-pink-600',
    border: 'border-violet-500/30',
    iconColor: 'text-violet-400',
  },
  {
    icon: FaCode,
    value: 100,
    label: 'DSA Problems Solved',
    suffix: '+',
    description: 'Strong DSA Foundation',
    color: 'from-green-600 to-teal-600',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
  },
  {
    icon: FaTrophy,
    value: 3,
    label: 'Certifications',
    suffix: '',
    description: 'Industry Recognized',
    color: 'from-yellow-600 to-orange-600',
    border: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
  },
];

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const isDecimal = !Number.isInteger(target);

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 100) / 100 : Math.floor(current));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, target]);

  const isDecimal = !Number.isInteger(target);
  return (
    <span>
      {isDecimal ? count.toFixed(2) : count}{suffix}
    </span>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" ref={ref} className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">By the numbers</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.04 }}
              className={`glass-strong rounded-2xl p-5 text-center border ${item.border} transition-all hover:shadow-xl`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={item.iconColor} size={22} />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold gradient-text mb-1`}>
                <Counter target={item.value} suffix={item.suffix} inView={inView} />
              </div>
              <p className="text-white text-xs font-semibold mb-1 leading-tight">{item.label}</p>
              <p className="text-gray-500 text-xs leading-tight">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
