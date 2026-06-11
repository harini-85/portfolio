import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaCopy, FaCheck, FaPaperPlane,
} from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'harininethi8@gmail.com',
    href: 'mailto:harininethi8@gmail.com',
    color: 'text-purple-400',
    copyable: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/harininethi',
    href: 'https://linkedin.com/in/harininethi',
    color: 'text-blue-400',
    copyable: false,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/harini-85',
    href: 'https://github.com/harini-85',
    color: 'text-gray-300',
    copyable: false,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 8341557971',
    href: 'tel:+918341557971',
    color: 'text-green-400',
    copyable: true,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Let's connect</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
            Open to internship opportunities, collaborations, and interesting conversations about tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Contact Details</h3>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-strong rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-all flex items-center justify-between group"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className={`w-10 h-10 rounded-xl glass flex items-center justify-center ${item.color} shrink-0`}>
                    <item.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-white text-sm font-medium truncate">{item.value}</p>
                  </div>
                </a>
                {item.copyable && (
                  <button
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="ml-2 p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all shrink-0"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copied === item.label ? (
                      <FaCheck size={13} className="text-green-400" />
                    ) : (
                      <FaCopy size={13} />
                    )}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-purple-500/60 focus:outline-none transition-all bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-purple-500/60 focus:outline-none transition-all bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-purple-500/60 focus:outline-none transition-all bg-transparent resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending || sent}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                  sent
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90'
                }`}
              >
                {sent ? (
                  <><FaCheck size={14} /> Message Sent!</>
                ) : sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <><FaPaperPlane size={14} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
