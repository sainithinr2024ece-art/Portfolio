import { motion } from 'framer-motion';
import { Code2, Terminal, Award, ExternalLink } from 'lucide-react';

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

const Linkedin = (props) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const profilesData = [
  {
    name: 'LinkedIn',
    description: 'Professional networking, industry connections, and career updates.',
    link: 'https://www.linkedin.com/in/sai-nithin-rengarajan-997a30317/',
    icon: <Linkedin size={28} />,
    color: '#0A66C2'
  },
  {
    name: 'GitHub',
    description: 'Source code repository hosting, collaboration, and open-source contributions.',
    link: 'https://github.com/sainithinr2024ece-art',
    icon: <Github size={28} />,
    color: '#1F2328'
  },
  {
    name: 'LeetCode',
    description: 'Data Structures and Algorithms preparation. Active problem solving.',
    link: 'https://leetcode.com/u/Sai_756/',
    icon: <Code2 size={28} />,
    color: '#FFA116'
  },
  {
    name: 'HackerRank',
    description: 'Skill assessments, coding profiles, and certified badges in Core languages.',
    link: 'https://www.hackerrank.com/profile/sainithinpdy',
    icon: <Terminal size={28} />,
    color: '#2EC866'
  },
  {
    name: 'SkillRack',
    description: 'Daily programming challenges, aptitude assessments, and logical challenges.',
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=515321&key=f5c36e2b1040d823bab5f650cb554fc42544eaab',
    icon: <Award size={28} />,
    color: '#3B82F6'
  }
];

export default function Profiles() {
  return (
    <section id="profiles" style={{ backgroundColor: 'rgba(27, 20, 37, 0.2)' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Ecosystem</span> Coding Profiles
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {profilesData.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card profile-card"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(168, 85, 247, 0.15)',
                minHeight: '240px',
                position: 'relative'
              }}
            >
              {/* Glow Behind Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: profile.color,
                filter: 'blur(35px)',
                opacity: 0.2,
                pointerEvents: 'none'
              }} />

              <div>
                {/* Platform Icon & Name */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    color: 'var(--text-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}>
                    {profile.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-light)'
                  }}>
                    {profile.name}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.5',
                  marginBottom: '24px'
                }}>
                  {profile.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  padding: '10px 0',
                  gap: '6px'
                }}
              >
                <span>Visit Profile</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .profile-card:hover {
          box-shadow: 0 15px 35px rgba(168, 85, 247, 0.25) !important;
          border-color: var(--highlight-teal) !important;
        }
      `}</style>
    </section>
  );
}
