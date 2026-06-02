import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="section-label reveal">
        <span>01</span> ABOUT
      </div>

      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="profile-3d-container">
            <div className="profile-ring ring-1"></div>
            <div className="profile-ring ring-2"></div>
            <div className="profile-ring ring-3"></div>
            <div className="profile-core">
              <div className="profile-avatar">
                <span className="avatar-initials">PP</span>
                <div className="avatar-glow"></div>
              </div>
            </div>
            <div className="orbit-dot dot-1"></div>
            <div className="orbit-dot dot-2"></div>
            <div className="orbit-dot dot-3"></div>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">🎓</span>
              <div>
                <div className="info-title">B.Tech CSE</div>
                <div className="info-sub">Aditya College of Engineering</div>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <div className="info-title">Ramachandrapuram</div>
                <div className="info-sub">Andhra Pradesh, India</div>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📧</span>
              <div>
                <div className="info-title">priyanka.pilla999</div>
                <div className="info-sub">@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h2 className="reveal">
            Building Tomorrow's<br />
            <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="reveal">
            I'm an enthusiastic Computer Science Engineering undergraduate (2024–2028) at Aditya College of Engineering and Technology, 
            with a strong passion for creating software that makes a difference.
          </p>
          <p className="reveal">
            With hands-on experience in <span className="highlight">Java</span>, <span className="highlight">Python</span>, 
            <span className="highlight">React</span>, and full-stack web development, I love turning complex problems into 
            elegant, efficient solutions. My academic foundation gives me the tools — my curiosity drives me further.
          </p>
          <p className="reveal">
            Beyond coding, I'm an active campus leader — I organize monthly events to boost student engagement in college clubs 
            and have conducted CSR programmes on World Environment Day, proving that technology and community go hand in hand.
          </p>

          <div className="about-highlights reveal">
            <div className="highlight-item">
              <div className="highlight-bar" style={{'--w': '93%'}}></div>
              <div className="highlight-info">
                <span>Intermediate Score</span>
                <span>932 / 1000</span>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-bar" style={{'--w': '79.5%'}}></div>
              <div className="highlight-info">
                <span>B.Tech CGPA</span>
                <span>7.95 / 10</span>
              </div>
            </div>
          </div>

          <div className="about-links reveal">
            <a href="https://www.linkedin.com/in/pilla-priyanka-63ab2a313" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:priyanka.pilla999@gmail.com" className="social-link email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
