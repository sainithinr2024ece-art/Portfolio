import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

export default function Internship() {
  const handleVerify = () => {
    window.open('https://drive.google.com/file/d/1FpiGK5waIGNqSzncxmKHNev8lGSUnaLf/view', '_blank');
  };

  return (
    <section id="internship">
      <div className="container">
        <h2 className="section-title">
          <span>Experience</span> Internship
        </h2>

        <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
          {/* Left: Certificate Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="glass-card certificate-card"
              style={{
                padding: '40px',
                border: '2px solid rgba(168, 85, 247, 0.3)',
                boxShadow: '0 20px 50px rgba(168, 85, 247, 0.15)',
                background: 'rgba(27, 20, 37, 0.8)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative Stamp Background */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                opacity: 0.05,
                color: 'var(--highlight-teal)',
                transform: 'rotate(-15deg)'
              }}>
                <Award size={200} />
              </div>

              {/* Certificate Inner Border */}
              <div style={{
                border: '1px solid rgba(45, 212, 191, 0.2)',
                padding: '30px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <Award size={48} className="text-teal" style={{ marginBottom: '16px' }} />
                
                <h4 style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  color: 'var(--highlight-teal)',
                  letterSpacing: '0.2em',
                  marginBottom: '10px'
                }}>
                  Certificate of Completion
                </h4>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  MERN Stack Development
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  maxWidth: '320px',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  This certifies that <strong>Sai Nithin Rengarajan</strong> has successfully completed intensive training covering MongoDB, Express.js, React, and Node.js.
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '16px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  <div>
                    <span>Authorized by</span>
                    <p style={{ fontWeight: 600, color: 'var(--text-light)', marginTop: '2px' }}>Training Partner</p>
                  </div>
                  <div>
                    <span>Verification</span>
                    <p style={{ fontWeight: 600, color: 'var(--highlight-teal)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Verified <CheckCircle size={12} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Description & Training Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '50px',
              background: 'rgba(45, 212, 191, 0.1)',
              border: '1px solid rgba(45, 212, 191, 0.2)',
              color: 'var(--highlight-teal)',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              <Calendar size={14} />
              <span>Full-Stack Training Program</span>
            </div>

            <h3 style={{
              fontSize: '2rem',
              fontWeight: 800,
              marginBottom: '20px',
              color: 'var(--text-light)'
            }}>
              MERN Stack Development Internship
            </h3>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              marginBottom: '24px'
            }}>
              Successfully completed intensive MERN Stack training covering MongoDB, Express.js, React.js, and Node.js. Built responsive web applications, implemented REST APIs, and gained practical experience in full-stack development workflows.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Robust RESTful API design using Express & Node',
                'State management, components & hooks in React.js',
                'NoSQL Database management & schema optimization in MongoDB',
                'Production deployment pipelines and version control practices'
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={18} className="text-teal" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleVerify}
              className="btn btn-primary"
            >
              <span>Verify Certificate</span>
              <ExternalLink size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        .certificate-card:hover {
          box-shadow: 0 25px 60px rgba(168, 85, 247, 0.3) !important;
          border-color: var(--highlight-teal) !important;
        }
      `}</style>
    </section>
  );
}
