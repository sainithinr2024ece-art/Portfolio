import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, Sparkles } from 'lucide-react';
import profileImg from '../assets/profileImg.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.offsetTop - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const resumeUrl = '/resume.pdf';

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container">
        <motion.div 
          className="grid-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ alignItems: 'center' }}
        >
          {/* Left Side: Copywriting & Actions */}
          <div>
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '50px',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                color: 'var(--highlight-teal)',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              <Sparkles size={14} />
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                marginBottom: '16px'
              }}
            >
              Hi, I'm <br />
              <span className="text-gradient">Sai Nithin Rengarajan</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--text-light)',
                opacity: 0.9,
                marginBottom: '16px',
                lineHeight: 1.4
              }}
            >
              Electronics & Communication Engineer <span style={{ color: 'var(--highlight-teal)' }}>|</span> Full Stack Developer <span style={{ color: 'var(--highlight-teal)' }}>|</span> MERN Stack Enthusiast
            </motion.p>

            <motion.p 
              variants={itemVariants}
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                marginBottom: '32px',
                maxWidth: '540px'
              }}
            >
              Building intelligent web applications, scalable software solutions, and impactful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '40px'
              }}
            >
              <button 
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={resumeUrl}
                download
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <FileText size={16} style={{ color: 'var(--highlight-teal)' }} />
                <span>Resume CV</span>
              </a>

              <button 
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary"
                style={{ border: '1px dashed var(--accent-violet)' }}
              >
                <Send size={15} />
                <span>Contact</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Interactive Terminal & Profile Photo */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              perspective: '1000px'
            }}
          >
            {/* Circular Profile Photo in Home Page (Hero) */}
            <div 
              style={{
                position: 'relative',
                width: '170px',
                height: '170px',
                borderRadius: '50%',
                padding: '4px',
                background: 'radial-gradient(circle at top, rgba(45, 212, 191, 0.22), transparent 45%), linear-gradient(135deg, var(--accent-violet) 0%, var(--highlight-teal) 100%)',
                boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.12), 0 0 24px rgba(45, 212, 191, 0.18), 0 10px 30px rgba(168, 85, 247, 0.25)',
                animation: 'float-subtle 4s ease-in-out infinite'
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
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)'
                }}
              >
                <img 
                  src={profileImg} 
                  alt="Sai Nithin Rengarajan" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            {/* Code Terminal */}
            <div 
              className="glass-card"
              style={{
                width: '100%',
                padding: '0',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.1)',
                background: 'rgba(27, 20, 37, 0.75)',
                fontFamily: 'var(--font-code)',
                fontSize: '0.85rem'
              }}
            >
              {/* Terminal Title Bar */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  background: 'rgba(18, 18, 18, 0.6)',
                  borderBottom: '1px solid rgba(168, 85, 247, 0.15)'
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 500 }}>
                  developer.js — node
                </div>
                <div style={{ width: '40px' }}></div>
              </div>

              {/* Terminal Code Content */}
              <div 
                style={{
                  padding: '24px',
                  color: '#A7F3D0',
                  lineHeight: '1.7',
                  overflowX: 'auto'
                }}
              >
                <span style={{ color: '#F472B6' }}>const</span> dev = &#123;<br />
                &nbsp;&nbsp;name: <span style={{ color: '#2DD4BF' }}>'Sai Nithin Rengarajan'</span>,<br />
                &nbsp;&nbsp;education: <span style={{ color: '#2DD4BF' }}>'B.E. Electronics & Communication'</span>,<br />
                &nbsp;&nbsp;skills: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#A855F7' }}>'Java'</span>, <span style={{ color: '#A855F7' }}>'React'</span>, <span style={{ color: '#A855F7' }}>'Spring Boot'</span>, <span style={{ color: '#A855F7' }}>'MongoDB'</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;focus: <span style={{ color: '#2DD4BF' }}>'Building intelligent, scalable solutions'</span>,<br />
                &nbsp;&nbsp;activeCoding: <span style={{ color: '#F59E0B' }}>true</span>,<br />
                &nbsp;&nbsp;commitsPerDay: <span style={{ color: '#F59E0B' }}>'&gt;= 5'</span><br />
                &#125;;<br /><br />
                <span style={{ color: 'var(--text-muted)' }}>// Run code analyzer</span><br />
                <span style={{ color: '#F472B6' }}>function</span> <span style={{ color: '#60A5FA' }}>analyzeBrand</span>(profile) &#123;<br />
                &nbsp;&nbsp;console.log(profile.focus);<br />
                &nbsp;&nbsp;<span style={{ color: '#F472B6' }}>return</span> <span style={{ color: '#2DD4BF' }}>'Premium Developer Quality 👍'</span>;<br />
                &#125;<br />
                <span style={{ color: '#60A5FA' }}>analyzeBrand</span>(dev);
              </div>
            </div>

            <style>{`
              @keyframes float-subtle {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
            `}</style>
          </motion.div>
        </motion.div>

        {/* Tech Stack Banner */}
        <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '30px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', textAlign: 'center' }}>
            Core Tech Stack & Ecosystem
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap',
            opacity: 0.65
          }}>
            {['Java', 'React', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'Express.js', 'Git'].map((tech) => (
              <span 
                key={tech} 
                style={{ 
                  color: 'var(--text-light)', 
                  fontWeight: 600, 
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
