import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const [typed, setTyped] = useState('');
  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  // 3D particle system on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 3D sphere of particles
    const particles = [];
    const NUM = 180;

    for (let i = 0; i < NUM; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particles.push({
        theta,
        phi,
        radius: 200 + Math.random() * 60,
        speed: 0.002 + Math.random() * 0.003,
        size: Math.random() * 2 + 0.5,
        color: Math.random() > 0.5 ? '#00f5ff' : Math.random() > 0.5 ? '#a855f7' : '#ff006e',
        orbitAngle: Math.random() * Math.PI * 2,
      });
    }

    // Floating hexagons
    const hexagons = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 20 + Math.random() * 40,
      rotation: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.005,
      opacity: 0.05 + Math.random() * 0.1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let globalAngle = 0;

    const drawHex = (x, y, size, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      globalAngle += 0.004;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw 3D sphere particles
      const sorted = [...particles].sort((a, b) => {
        const az = Math.sin(a.phi) * Math.sin(a.theta + globalAngle) * a.radius;
        const bz = Math.sin(b.phi) * Math.sin(b.theta + globalAngle) * b.radius;
        return az - bz;
      });

      sorted.forEach(p => {
        p.theta += p.speed;
        const x = cx + Math.sin(p.phi) * Math.cos(p.theta + globalAngle) * p.radius;
        const y = cy + Math.cos(p.phi) * p.radius * 0.5;
        const z = Math.sin(p.phi) * Math.sin(p.theta + globalAngle) * p.radius;
        const perspective = (p.radius + z) / (p.radius * 2);
        const alpha = 0.3 + perspective * 0.7;
        const size = p.size * perspective;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, size * 6);
        grd.addColorStop(0, p.color + '30');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(x, y, size * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      for (let i = 0; i < sorted.length; i++) {
        const p1 = sorted[i];
        const x1 = cx + Math.sin(p1.phi) * Math.cos(p1.theta + globalAngle) * p1.radius;
        const y1 = cy + Math.cos(p1.phi) * p1.radius * 0.5;
        for (let j = i + 1; j < sorted.length; j++) {
          const p2 = sorted[j];
          const x2 = cx + Math.sin(p2.phi) * Math.cos(p2.theta + globalAngle) * p2.radius;
          const y2 = cy + Math.cos(p2.phi) * p2.radius * 0.5;
          const dist = Math.hypot(x1 - x2, y1 - y2);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.06 * (1 - dist / 55)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Floating hexagons
      hexagons.forEach(h => {
        h.x += h.vx;
        h.y += h.vy;
        h.rotation += h.speed;
        if (h.x < -60) h.x = canvas.width + 60;
        if (h.x > canvas.width + 60) h.x = -60;
        if (h.y < -60) h.y = canvas.height + 60;
        if (h.y > canvas.height + 60) h.y = -60;
        drawHex(h.x, h.y, h.size, h.rotation, h.opacity);
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const roles = ['CSE Undergraduate', 'Web Developer', 'React Enthusiast', 'Java Developer', 'Problem Solver'];
    const interval = setInterval(() => {
      const currentRole = roles[roleRef.current];
      if (!deletingRef.current) {
        if (charRef.current < currentRole.length) {
          charRef.current++;
          setTyped(currentRole.slice(0, charRef.current));
        } else {
          setTimeout(() => { deletingRef.current = true; }, 1500);
        }
      } else {
        if (charRef.current > 0) {
          charRef.current--;
          setTyped(currentRole.slice(0, charRef.current));
        } else {
          deletingRef.current = false;
          roleRef.current = (roleRef.current + 1) % roles.length;
        }
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="name-line-1">PRIYANKA</span>
          <span className="name-line-2">PILLA</span>
        </h1>
        <div className="hero-role">
          <span className="role-prefix">&gt;_ </span>
          <span className="role-text">{typed}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="hero-description">
          Enthusiastic CSE undergraduate with hands-on experience in Java, Python, and web development.
          Passionate about building efficient software solutions and learning new technologies.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            <span>VIEW PROJECTS</span>
            <div className="btn-glow"></div>
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            CONTACT ME
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">7.95</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">8+</span>
            <span className="stat-label">TECH SKILLS</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">LANGUAGES</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
