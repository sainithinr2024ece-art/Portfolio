import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 70 },
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ]
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: 'Spring Boot', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
    ]
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 80 },
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code & Eclipse', level: 90 },
      { name: 'Postman', level: 80 },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          <span>Expertise</span> My Skills
        </h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="glass-card"
              variants={cardVariants}
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--text-light)',
                borderBottom: '1px solid rgba(45, 212, 191, 0.2)',
                paddingBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--highlight-teal)' }} />
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: '500' }}>
                      <span style={{ color: 'var(--text-light)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--highlight-teal)', fontWeight: '600' }}>{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      {/* Animated Progress Bar Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, var(--accent-violet) 0%, var(--highlight-teal) 100%)',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
