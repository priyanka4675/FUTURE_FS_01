import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 100;
      sections.forEach(sec => {
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('home')}>
        <span className="logo-bracket">&lt;</span>
        <span className="logo-text">PRIYANKA</span>
        <span className="logo-bracket">/&gt;</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.id}>
            <button
              className={`nav-link ${active === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              <span className="nav-link-num">0{navLinks.indexOf(link) + 1}.</span>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
