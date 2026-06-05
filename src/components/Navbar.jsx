import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Internship', id: 'internship' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Profiles', id: 'profiles' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const scrollPosition = window.scrollY + 120; // offset for nav height
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.offsetTop - 80; // height of navbar
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#121212]/80 backdrop-blur-md border-b border-purple-500/10 py-4' 
          : 'bg-transparent py-6'
      }`}
      style={{
        transition: 'var(--transition)'
      }}
    >
      <div className="container flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'between' }}>
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-light)',
            textDecoration: 'none',
            fontSize: '1.25rem',
            fontWeight: '700',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <Terminal size={22} className="text-teal" style={{ color: 'var(--highlight-teal)' }} />
          <span>SNR<span style={{ color: 'var(--highlight-teal)' }}>.dev</span></span>
        </a>

        {/* Desktop Links */}
        <div 
          style={{
            display: 'flex',
            gap: '24px',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              style={{
                color: activeSection === link.id ? 'var(--highlight-teal)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'var(--transition)',
                position: 'relative',
                padding: '4px 0'
              }}
              className="nav-link-hover"
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--highlight-teal)'
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-light)',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* CSS Helper for show/hide classes without Tailwind */}
      <style>{`
        .hidden { display: none; }
        @media (min-width: 768px) {
          .hidden.md\\:flex { display: flex; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link-hover:hover {
          color: var(--text-light) !important;
        }
      `}</style>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'rgba(18, 18, 18, 0.95)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid var(--glass-border)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 49
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                style={{
                  color: activeSection === link.id ? 'var(--highlight-teal)' : 'var(--text-light)',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'block'
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
