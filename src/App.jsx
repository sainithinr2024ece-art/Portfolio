import { Suspense, lazy } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import FloatingBlobs from './components/FloatingBlobs';
import Hero from './sections/Hero';

// Lazy loading sections for premium performance
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Internship = lazy(() => import('./sections/Internship'));
const Achievements = lazy(() => import('./sections/Achievements'));
const Profiles = lazy(() => import('./sections/Profiles'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    width: '100%'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(168, 85, 247, 0.1)',
      borderRadius: '50%',
      borderTopColor: 'var(--highlight-teal)',
      animation: 'spin-fast 0.8s linear infinite'
    }} />
    <style>{`
      @keyframes spin-fast {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
        {/* Visual Background Layers */}
        <ParticleBackground />
        <FloatingBlobs />
        
        {/* Navigation Header */}
        <Navbar />

        {/* Portfolio Sections Flow */}
        <main>
          <Hero />
          
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <Skills />
            <Projects />
            <Internship />
            <Achievements />
            <Profiles />
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
