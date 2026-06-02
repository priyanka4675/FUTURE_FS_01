import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span>PRIYANKA</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p>CSE Undergraduate · Web Developer · Andhra Pradesh, India</p>
        </div>
        <div className="footer-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map(id => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className="footer-nav-btn"
            >
              {id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Priyanka Pilla. Built with React & 💙</span>
        <span className="footer-tag">Designed to impress recruiters</span>
      </div>
    </footer>
  );
}
