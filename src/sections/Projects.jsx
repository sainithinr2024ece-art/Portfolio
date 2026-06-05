import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: 'Smart Loan Approval & Credit Scoring System',
    category: 'fullstack',
    description: 'Developed an AI-powered loan approval platform that evaluates applicant profiles and predicts loan eligibility using credit scoring techniques. Implemented automated risk assessment, data analysis, and decision-making workflows to improve lending accuracy and efficiency.',
    tech: ['Java', 'Spring Boot', 'Machine Learning', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/sainithinr2024ece-art/smart-loan-approval-and-credit-scoring-system',
    features: [
      'Credit score prediction',
      'Risk assessment',
      'Automated loan approval workflow',
      'Data-driven insights'
    ],
    icon: <ShieldCheck className="text-teal" size={32} />
  },
  {
    id: 2,
    title: 'Internet Speed Test Application',
    category: 'java',
    description: 'Built a real-time internet speed monitoring application capable of measuring download speed, upload speed, and network latency. Designed a clean user interface with accurate performance metrics and responsive reporting.',
    tech: ['Java', 'Networking APIs', 'JavaFX'],
    github: 'https://github.com/sainithinr2024ece-art/internet-speed-test',
    features: [
      'Real-time speed measurement',
      'Upload/download monitoring',
      'Latency analysis',
      'User-friendly dashboard'
    ],
    icon: <Zap className="text-teal" size={32} />
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ backgroundColor: 'rgba(27, 20, 37, 0.2)' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Portfolio</span> Selected Projects
        </h2>

        {/* Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '50px'
        }}>
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Full Stack & AI', value: 'fullstack' },
            { label: 'Java & Desktop', value: 'java' }
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`btn ${filter === btn.value ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                padding: '8px 20px',
                fontSize: '0.85rem'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px'
        }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '36px',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  minHeight: '420px'
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'between',
                    alignItems: 'center',
                    marginBottom: '24px',
                    width: '100%'
                  }}>
                    <div style={{
                      padding: '12px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(45, 212, 191, 0.1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {project.icon}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto' }}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          color: 'var(--text-muted)',
                          transition: 'var(--transition)',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                        className="project-icon-link"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '16px',
                    color: 'var(--text-light)'
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}>
                    {project.description}
                  </p>

                  {/* Core Features */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      color: 'var(--highlight-teal)',
                      letterSpacing: '0.05em',
                      marginBottom: '10px',
                      fontWeight: 600
                    }}>
                      Key Features
                    </h4>
                    <ul style={{
                      paddingLeft: '18px',
                      color: 'var(--text-light)',
                      fontSize: '0.9rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '24px'
                  }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(168, 85, 247, 0.1)',
                          border: '1px solid rgba(168, 85, 247, 0.2)',
                          color: 'var(--text-light)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      padding: '10px 0'
                    }}
                  >
                    <span>View Repository</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .project-icon-link:hover {
          color: var(--highlight-teal) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 480px) {
          #projects div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
