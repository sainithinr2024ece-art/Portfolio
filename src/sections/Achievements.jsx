import { motion } from 'framer-motion';
import { Trophy, Code2, Briefcase, Star } from 'lucide-react';

const statsData = [
  { value: '150+', label: 'LeetCode Solved', icon: <Code2 size={24} /> },
  { value: '5★', label: 'HackerRank Gold', icon: <Star size={24} /> },
  { value: '250+', label: 'SkillRack Points', icon: <Trophy size={24} /> },
  { value: '5+', label: 'Key Projects', icon: <Briefcase size={24} /> },
];

const achievementsList = [
  {
    title: 'Active LeetCode Solver',
    description: 'Consistently solving data structures & algorithm challenges. Focusing on arrays, strings, tree traversal, and dynamic programming.',
    badge: 'Coding Profile'
  },
  {
    title: 'HackerRank Programming Gold',
    description: 'Earned multiple gold badges in Java, Problem Solving, and SQL. Actively participating in competitive challenges.',
    badge: 'Gold Badges'
  },
  {
    title: 'SkillRack Daily Challenger',
    description: 'Regularly solving daily tests and aptitude tests, honing logical reasoning and syntax expertise across languages.',
    badge: 'Aptitude & Syntax'
  },
  {
    title: 'MERN Stack Internship Graduate',
    description: 'Mastered Full-Stack Development concepts including database normalization, secure JWT login, and REST routes creation.',
    badge: 'Credential'
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="achievements" style={{ backgroundColor: 'rgba(27, 20, 37, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Milestones</span> Achievements
        </h2>

        {/* Counter Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card"
              style={{
                padding: '24px',
                textAlign: 'center',
                border: '1px solid rgba(45, 212, 191, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div style={{
                color: 'var(--highlight-teal)',
                background: 'rgba(45, 212, 191, 0.1)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-light)', fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Detail Cards */}
        <motion.div 
          className="grid-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {achievementsList.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card"
              variants={cardVariants}
              style={{
                padding: '30px',
                border: '1px solid rgba(168, 85, 247, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--highlight-teal)',
                  backgroundColor: 'rgba(45, 212, 191, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {item.badge}
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-light)',
                  marginBottom: '10px'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
