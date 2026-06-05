import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Code2, Terminal } from 'lucide-react';

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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill out all fields.'
      });
      return;
    }

    setStatus({ submitting: true, success: null, message: '' });

    // Simulate API call
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        message: 'Thank you for your message! Sai Nithin will get back to you shortly.'
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          <span>Get in Touch</span> Contact Me
        </h2>

        <div className="grid-2" style={{ gap: '50px' }}>
          
          {/* Left Side: Contact Information & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-light)' }}>
                Let's discuss your <span style={{ color: 'var(--highlight-teal)' }}>next project</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
                I am looking for internship and software developer roles. Whether you have a question, want to collaborate, or just say hi, feel free to reach out!
              </p>
            </div>

            {/* Direct Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  color: 'var(--accent-violet)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: 500 }}>sainithinpdy@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(45, 212, 191, 0.1)',
                  color: 'var(--highlight-teal)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: 500 }}>Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Media Shortcuts */}
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                Connect on Socials
              </h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                {[
                  { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/sai-nithin-rengarajan-997a30317/', color: 'rgba(10, 102, 194, 0.1)' },
                  { icon: <Github size={20} />, link: 'https://github.com/sainithinr2024ece-art', color: 'rgba(255, 255, 255, 0.05)' },
                  { icon: <Code2 size={20} />, link: 'https://leetcode.com/u/Sai_756/', color: 'rgba(255, 161, 22, 0.1)' },
                  { icon: <Terminal size={20} />, link: 'https://www.hackerrank.com/profile/sainithinpdy', color: 'rgba(46, 200, 102, 0.1)' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: social.color,
                      color: 'var(--text-light)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'var(--transition)'
                    }}
                    className="contact-social-btn"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: '40px', border: '1px solid rgba(168, 85, 247, 0.2)' }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hi Sai, I'd like to discuss..."
                  className="form-control"
                />
              </div>

              {status.message && (
                <div style={{
                  padding: '12px 18px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  marginBottom: '20px',
                  backgroundColor: status.success ? 'rgba(45, 212, 191, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: `1px solid ${status.success ? 'var(--highlight-teal)' : '#EF4444'}`,
                  color: status.success ? 'var(--highlight-teal)' : '#FCA5A5'
                }}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-social-btn:hover {
          transform: translateY(-3px);
          color: var(--highlight-teal) !important;
          border-color: var(--highlight-teal) !important;
          box-shadow: 0 0 15px rgba(45, 212, 191, 0.2);
        }
      `}</style>
    </section>
  );
}
