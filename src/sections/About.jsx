import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code, Compass } from 'lucide-react';
import profileImg from '../assets/profileImg.jpeg';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const details = [
    { icon: <MapPin className="text-teal" size={20} />, label: 'Location', value: 'Tamil Nadu, India' },
    { icon: <GraduationCap className="text-teal" size={20} />, label: 'Degree', value: 'B.E. Electronics and Communication Engineering' },
    { icon: <Compass className="text-teal" size={20} />, label: 'Interests', value: 'Full Stack, Java Development, Open Source' },
    { icon: <Code className="text-teal" size={20} />, label: 'Specialty', value: 'Problem Solving & MERN Stack' },
  ];

  return (
    <section id="about" style={{ backgroundColor: 'rgba(27, 20, 37, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Background</span> About Me
        </h2>

        <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
          
          {/* Circular Frame Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              position: 'relative'
            }}
          >
            {/* Glowing outer rings */}
            <div 
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-violet) 0%, var(--highlight-teal) 100%)',
                filter: 'blur(15px)',
                opacity: 0.4,
                zIndex: 0,
                animation: 'pulse 4s ease-in-out infinite'
              }}
            />
            
            {/* Inner Frame */}
            <div 
              style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, var(--accent-violet) 0%, var(--highlight-teal) 100%)',
                zIndex: 1
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={profileImg} 
                  alt="Sai Nithin Rengarajan" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </motion.div>

          {/* Biography Text & Information */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-light)' }}>
              Engineering Student & <span style={{ color: 'var(--highlight-teal)' }}>Software Developer</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '30px' }}>
              I am Sai Nithin Rengarajan, an Electronics and Communication Engineering student passionate about software development, web technologies, and problem solving. I enjoy building real-world applications using Java, React, MongoDB, Spring Boot, and modern development tools. My goal is to create impactful technology solutions while continuously improving my technical and problem-solving abilities.
            </p>

            {/* Quick Metadata Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {details.map((detail, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'rgba(27, 20, 37, 0.5)',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  <div style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {detail.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                      {detail.label}
                    </h4>
                    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-light)' }}>
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
