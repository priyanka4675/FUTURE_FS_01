import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      setTimeout(() => {
        if (ring) {
          ring.style.left = e.clientX + 'px';
          ring.style.top = e.clientY + 'px';
        }
      }, 80);
    };

    const growCursor = () => {
      if (ring) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(168,85,247,0.6)';
      }
    };

    const shrinkCursor = () => {
      if (ring) {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(0,245,255,0.5)';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', growCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="app">
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>
      <div className="bg-grid"></div>
      <div className="noise-overlay"></div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
