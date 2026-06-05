import { useState, useEffect } from 'react';
import { ArrowUp, Code2, Terminal } from 'lucide-react';

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

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(168, 85, 247, 0.15)',
      padding: '40px 0',
      position: 'relative'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { icon: <Linkedin size={18} />, link: 'https://www.linkedin.com/in/sai-nithin-rengarajan-997a30317/' },
            { icon: <Github size={18} />, link: 'https://github.com/sainithinr2024ece-art' },
            { icon: <Code2 size={18} />, link: 'https://leetcode.com/u/Sai_756/' },
            { icon: <Terminal size={18} />, link: 'https://www.hackerrank.com/profile/sainithinpdy' }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition)',
                display: 'flex',
                alignItems: 'center'
              }}
              className="footer-social-link"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Branding Credit */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            fontWeight: 500
          }}>
            Designed and Developed by <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Sai Nithin Rengarajan</span>
          </p>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            opacity: 0.7,
            marginTop: '6px'
          }}>
            &copy; {new Date().getFullYear()} — Electronics & Communication Engineer
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-violet)',
            border: 'none',
            color: 'var(--text-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
            transition: 'all 0.3s ease',
            zIndex: 40
          }}
          className="scroll-top-btn"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        .footer-social-link:hover {
          color: var(--highlight-teal) !important;
          transform: translateY(-2px);
        }
        .scroll-top-btn:hover {
          transform: translateY(-3px) scale(1.05);
          background-color: var(--highlight-teal) !important;
          box-shadow: 0 6px 20px rgba(45, 212, 191, 0.4) !important;
          color: var(--bg-main) !important;
        }
      `}</style>
    </footer>
  );
}
